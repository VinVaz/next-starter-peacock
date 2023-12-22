import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { v4 as uuid } from "uuid";
import {remark} from "remark";
import html from "remark-html";
import remarkPrism from "remark-prism";
import { IContentData } from "../pages/articles/[id]";
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'


type IContentType = "articles" | "notes" | "work";

/**
 * Get IDs of all markdown post
 * @param {string} contentType Type of content to get ids
 */

function getContentInfo (contentType: IContentType) {
  let filenames;
  let baseDir;

  switch (contentType) {
    case "articles":
      baseDir = path.join(process.cwd(), "content", "articles");;
      filenames = fs.readdirSync(baseDir);
      break;
    case "notes":
      baseDir = path.join(process.cwd(), "content", "notes");
      filenames = fs.readdirSync(baseDir);
      break;
    case "work":
      baseDir = path.join(process.cwd(), "content", "work");
      filenames = fs.readdirSync(baseDir);
      break;
    default:
      console.log("You have to provide a content type");
  }
  
  return {baseDir, filenames}
}

function readAndParseFile(baseDir, fileName) {
  const filePath = path.join(baseDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const matterResult = matter(fileContent);
  return matterResult;
}

export const getAllContentIds = (contentType: IContentType) => {
  const {baseDir, filenames} = getContentInfo(contentType)
  return filenames.map((filename) => {
    const { data } = readAndParseFile(baseDir, filename);
    return {
      params: {
        id: data.slug
      },
    };
  });
};

/**
 * Get data for a given post id
 * @param {string} id ID of the post being passed
 * @param {string} contentType Type of content
 */

export const getContentData = async (id: string, contentType: IContentType) => {
  const {baseDir, filenames} = getContentInfo(contentType)
  const matchingFilename = filenames.find((filename) => {
    const { data } = readAndParseFile(baseDir, filename);
    return data.slug === id;
  });

  if (!matchingFilename) {
    return null;
  }

  const matterResult = readAndParseFile(baseDir, matchingFilename);
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkPrism)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    previewImage: matterResult.data.previewImage || "",
    description: matterResult.data.description || "",
    tags: matterResult.data.tags || [],
    category: matterResult.data.category || "",
  };
};

/**
 * Get content list for a particular content type
 * @param {string} contentType Type of content
 */
export const getContentList = (contentType: IContentType) => {
  const {baseDir, filenames} = getContentInfo(contentType)

  const content = filenames
    .filter((content) => content.endsWith(".md"))
    .map((content) => {
      const {data} = readAndParseFile(baseDir, content);
      return {
        ...data,
        previewImage: data.previewImage || "/images/image-placeholder.png",
        id: uuid(),
      };
    });

  return content.sort(sortByDate);
};

/**
 * Get content type with particular tag
 * @param {string} tag - tag to filter by
 */
export const getContentWithTag = (tag: string, contentType: IContentType) => {
  const {baseDir, filenames} = getContentInfo(contentType)
  let contentData = filenames
    .filter((content) => content.endsWith(".md"))
    .map((content) => {
      const {data} = readAndParseFile(baseDir, content);

      return {
        ...data,
        previewImage: data.previewImage || "/images/image-placeholder.png",
        id: uuid(),
      };
    });

  const filteredContent = contentData.filter((content: IContentData) => {
    return content.tags && content.tags.includes(tag);
  });

  return filteredContent.sort(sortByDate);
};

/**
 * Get content type with particular tag
 * @param {string} tag - tag to filter by
 */
export const getContentInCategory = (
  category: string,
  contentType: IContentType
) => {
  const {baseDir, filenames} = getContentInfo(contentType)

  let contentData = filenames
    .filter((content) => content.endsWith(".md"))
    .map((content) => {
      const {data} = readAndParseFile(baseDir, content);

      return {
        ...data,
        previewImage: data.previewImage || "/images/image-placeholder.png",
        id: uuid(),
      };
    });

  const filteredContent = contentData.filter((content: IContentData) => {
    return content.category && content.category === category;
  });

  return filteredContent.sort(sortByDate);
};

/**
 * Sorts content by their dates
 * @param a {Date} - Date of post 1
 * @param b {Date} - Date of post 2
 */
const sortByDate = (a, b) => {
  if (a.date > b.date) {
    return -1;
  } else if (a.date < b.date) {
    return 1;
  } else {
    return 0;
  }
};

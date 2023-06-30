import { GraphQLClient, gql } from "graphql-request";

export interface Image {
  url: string;
}

export interface Post {
  title: string;
  createdAt: string;
  slug: string;
  author: string;
  id: number;
  description: string;
  publishedAt: string;
  updatedAt: string;
  content: {
    html: string;
  };
  shortDescription: string;
  image: Image;
  featuredPost: boolean;
}
export interface Project {
  title: string;
  category: string;
  description: string;
  heroDescription: string;
  shortDescription: string;
  createdAt: string;
  image: Image;
  slug: string;
  content: {
    html: string;
  };
  client: string;
  service: string;
  deliverable: string;
  keywords: string[];
}

export const graphcms = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cljaggjro2abl01ue45ggesph/master"
);

export const getProjects = async (val: boolean): Promise<Project[]> => {
  const QUERY = gql`
    query {
      projects {
        title
        category
        description
        heroDescription
        slug
        shortDescription
        image {
          url
        }
        client
        service
        deliverable
        keywords
        content {
          html
        }
      }
    }
  `;

  const { projects } = await graphcms.request<{ projects: Project[] }>(QUERY);
  if (val === true) {
    return projects.slice(0, 3);
  } else return projects;
};

export const getPosts = async (val: boolean): Promise<Post[]> => {
  const QUERY = gql`
    query {
      posts {
        createdAt
        id
        publishedAt
        image {
          url
        }
        slug
        shortDescription
        description
        title
        updatedAt
        featuredPost
      }
    }
  `;

  const { posts } = await graphcms.request<{ posts: Post[] }>(QUERY);

  if (val === true) {
    return posts.slice(0, 4);
  } else return posts;
};

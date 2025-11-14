// Strapi Rich Text Block Types
export interface RichTextContent {
  type: string
  children?: RichTextContent[]
  [key: string]: any
}

// Category Type (Strapi v5 flat structure)
export interface Category {
  id: number
  name: string
  slug: string
  documentId?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
}

// Article Type (Strapi v5 flat structure)
export interface Article {
  id: number
  documentId?: string
  title: string
  slug: string
  content: RichTextContent[]
  category?: Category
  createdAt?: string
  updatedAt?: string
  publishedAt: string
}

// Strapi v5 API Response Types
export interface StrapiResponse<T> {
  data: T[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiSingleResponse<T> {
  data: T | null
}

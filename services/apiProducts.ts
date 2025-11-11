import { Product } from "@/types/products";

export async function fetchProducts(): Promise<Product[]> {
  const apiUrl =
    "https://api.rankrizers.com/api/v1/products?skip=0&limit=10&fetch=true&category=service-providers&subcategory=seo-agencies&hourlyRate=&budget=&pricingModel=&keyword=&location=&reviews=&crownRange=&upvoteRange=&caseStudyRange=&testimonialRange=&discounts=undefined&page=1&sortBy=most_upvoted&subcategorySlug=seo-agencies&uniqKey=&groupKey=";

  try {
    const res = await fetch(apiUrl, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }

      const data = await res.json();
    return data?.data?.records || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

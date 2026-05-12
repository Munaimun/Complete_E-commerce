export const mapDbProduct = (row) => ({
  _id: row.legacy_id || row.id,
  _base: row.category_slug,
  reviews: Number(row.reviews || 0),
  rating: Number(row.rating || 0),
  quantity: Number(row.quantity || 1),
  overView: row.overview || "",
  name: row.name,
  isStock: Boolean(row.is_stock),
  isNew: Boolean(row.is_new),
  images: row.images ? row.images.split(",").filter(Boolean) : [],
  discountedPrice: Number(row.discounted_price || 0),
  regularPrice: Number(row.regular_price || 0),
  description: row.description || "",
  colors: row.colors ? row.colors.split(",").filter(Boolean) : [],
  category: row.category_name,
  brand: row.brand || "",
});

export const mapDbCategory = (row) => ({
  _id: row.legacy_id || row.id,
  image: row.image,
  name: row.name,
  _base: row.slug,
  description: row.description || "",
});

export const mapDbHighlight = (row) => ({
  _id: row.legacy_id || row.id,
  _base: row.base_path,
  title: row.title,
  name: row.name,
  image: row.image,
  color: row.color,
  buttonTitle: row.button_title,
});

export const mapDbBlog = (row) => ({
  _id: row.legacy_id || row.id,
  image: row.image,
  title: row.title,
  description: row.description,
  _base: row.base,
});

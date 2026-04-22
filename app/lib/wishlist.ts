export type AddMovie = {
  id: number;
  title: string;
  poster_path: string;
};

const KEY = "wishlist";

export const getWishlist = (): AddMovie[] => {
  if (typeof window === "undefined") return [];

  try {
    const data = localStorage.getItem(KEY);
    return data ? (JSON.parse(data) as AddMovie[]) : [];
  } catch {
    return [];
  }
};

export const saveWishlist = (movies: AddMovie[]) => {
  localStorage.setItem(KEY, JSON.stringify(movies));
};

export const addToWishlist = (movie: AddMovie) => {
  const list = getWishlist();
  if (list.some((m) => m.id === movie.id)) return;

  saveWishlist([...list, movie]);
};

export const removeFromWishlist = (id: number) => {
  const list = getWishlist().filter((m) => m.id !== id);
  saveWishlist(list);
};

export const isInWishlist = (id: number): boolean => {
  return getWishlist().some((m) => m.id === id);
};

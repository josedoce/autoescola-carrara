import db from '../api/db';

export const useProducts = () => db;

export const useProduct = ({slug}) => {
    return db.find((e) =>e.slug === slug);
}
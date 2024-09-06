import Link from 'next/link';
import styles from './Pagination.module.css';

export default function Pagination({ currentPage, hasMore }) {
  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`}>Previous Page</Link>
      )}
      <span>Page {currentPage}</span>
      {hasMore && (
        <Link href={`/?page=${currentPage + 1}`}>Next Page</Link>
      )}
    </div>
  );
}
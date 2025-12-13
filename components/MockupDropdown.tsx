'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import styles from './MockupDropdown.module.css';

export default function MockupDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const mockups = [
    { href: '/mockup', label: 'Mockup 1' },
    { href: '/mockup2', label: 'Mockup 2' },
    { href: '/mockup3', label: 'Mockup 3' },
  ];

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 400); // Match animation duration
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClose]);

  // Close dropdown on escape key
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        handleClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button
        className={`${styles.dropdownButton} ${isOpen ? styles.open : ''}`}
        onClick={() => {
          if (isOpen) {
            handleClose();
          } else {
            setIsOpen(true);
          }
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select mockup website"
      >
        <span>Mockup Websites</span>
        <ChevronDown 
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          size={18}
        />
      </button>
      
      {(isOpen || isClosing) && (
        <div className={`${styles.dropdownMenu} ${isClosing ? styles.closing : ''}`}>
          {mockups.map((mockup) => (
            <Link
              key={mockup.href}
              href={mockup.href}
              className={styles.dropdownItem}
              onClick={handleClose}
            >
              {mockup.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}


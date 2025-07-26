// src/Data/faqPageData.js

// 1. Definiera ordningen och nycklarna för kategorierna
export const categories = [
    'general',
    'practical',
    'courses',
    'prices',
    'registration'
];

// 2. Definiera varje FAQ-objekt med ett unikt ID och en kategori-nyckel
export const faqPageData = [
    // Kategori: general
    { id: 'never_danced_before', category: 'general' }, // <-- LÄGG TILL DENNA RAD
    { id: 'what_is_sensual', category: 'general' },
    { id: 'all_ages', category: 'general' },
    { id: 'private_lessons', category: 'general' },

    // Kategori: practical
    { id: 'what_to_wear', category: 'practical' },
    { id: 'need_partner', category: 'practical' },
    { id: 'uneven_numbers', category: 'practical' },

    // Kategori: courses
    { id: 'course_length', category: 'courses' },
    { id: 'drop_in', category: 'courses' },
    { id: 'missed_class', category: 'courses' },

    // Kategori: prices
    { id: 'course_cost', category: 'prices' },
    { id: 'student_discount', category: 'prices' },
    { id: 'bi_weekly_discount', category: 'prices' },
    { id: 'couple_discount', category: 'prices' },
    { id: 'combine_discounts', category: 'prices' },
    { id: 'cancellation_policy', category: 'prices' },

    // Kategori: registration
    { id: 'how_to_register', category: 'registration' },
    { id: 'multiple_courses', category: 'registration' },
    {id: 'open_house_registration', category: 'registration' }
];
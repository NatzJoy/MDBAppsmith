{{
    // Fetch movies and flatten the languages array (assuming languages are comma-separated)
    const allLanguages = fetchMovieLang.data
        .map(movie => movie.spoken_languages.split(", ")) // Splitting each movie's spoken_languages by ", "
        .flat(); // Flattening the array to get a list of languages

    // Create a unique set of languages, optionally excluding 'English'
    const uniqueLanguages = Array.from(new Set(allLanguages)).filter(lang => lang !== "English");

    // Map to the format expected by the Select widget
    uniqueLanguages.map(lang => ({ label: lang, value: lang }));
}}

class HeaderSearch {
  constructor() {
    this.searchInput = document.getElementById('searchInput');

    if (!this.searchInput) {
      console.warn('Search input element not found!');
      return;
    }
    
    this.init();
  }

  init() {
    this.attachEventListeners();
  }

  attachEventListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.searchInput.blur();
      }
    });


    this.searchInput.addEventListener('input', (e) => {
      this.handleSearch(e);
    });
  
    this.searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.performSearch();
      }
    });

    this.searchInput.addEventListener('focus', () => {
      console.log('Search input focused');
    });

    this.searchInput.addEventListener('blur', () => {
      console.log('Search input blurred');
    });
  }

  handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    console.log('Đang tìm kiếm:', searchTerm);
  }

  performSearch() {
    const searchTerm = this.searchInput.value;
    if (searchTerm.trim()) {
      console.log('Tìm kiếm với từ khóa:', searchTerm);

    }
  }
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new HeaderSearch();
  });
} else {
  new HeaderSearch();
}

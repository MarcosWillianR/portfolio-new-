// chooseLang dropdown
const chooseLangDropdown = new Dropdown('[data-lang="button"]', '[data-lang="content"]', 'is-active', 'is-inactive');
chooseLangDropdown.init();

// grid-list dropdown
const gridListDropdown = new Dropdown('[data-grid="button"]', '[data-grid="content"]', 'is-active', 'is-inactive');
gridListDropdown.init();

// bell-list dropdown
const bellListDropdown = new Dropdown('[data-bell="button"]', '[data-bell="content"]', 'is-active', 'is-inactive');
bellListDropdown.init();

// user-list dropdown
const userListDropdown = new Dropdown('[data-user="button"]', '[data-user="content"]', 'is-active', 'is-inactive');
userListDropdown.init();

// order-list dropdown
const orderListDropdown = new Dropdown('[data-order="button"]', '[data-order="content"]', 'is-active', 'is-inactive');
orderListDropdown.init();

// max-items-list dropdown
const maxItemsDropdown = new Dropdown('[data-maxItems="button"]', '[data-maxItems="content"]', 'is-active', 'is-inactive');
maxItemsDropdown.init();

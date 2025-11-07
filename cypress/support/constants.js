// Constantes para uso nos testes

export const URLS = {
  BASE_URL: './src/index.html',
  PRIVACY_URL: './src/privacy.html'
};

export const SELECTORS = {
  // Campos de entrada
  FIRST_NAME: '#firstName',
  LAST_NAME: '#lastName',
  EMAIL: '#email',
  PHONE: '#phone',
  PRODUCT: '#product',
  TEXT_AREA: '#open-text-area',
  FILE_UPLOAD: '#file-upload',
  
  // Radio buttons
  RADIO_HELP: 'input[type="radio"][value="ajuda"]',
  RADIO_PRAISE: 'input[type="radio"][value="elogio"]',
  RADIO_FEEDBACK: 'input[type="radio"][value="feedback"]',
  
  // Checkboxes
  EMAIL_CHECKBOX: '#email-checkbox',
  PHONE_CHECKBOX: '#phone-checkbox',
  
  // Botões e links
  SUBMIT_BUTTON: 'button[type="submit"]',
  PRIVACY_LINK: '#privacy a',
  
  // Mensagens
  SUCCESS_MESSAGE: '.success',
  ERROR_MESSAGE: '.error',
  
  // Títulos
  TITLE: '#title',
  SUBTITLE: '#subtitle'
};

export const MESSAGES = {
  SUCCESS: 'Mensagem enviada com sucesso.',
  ERROR: 'Valide os campos obrigatórios!',
  TITLE: 'Central de Atendimento ao Cliente TAT'
};

export const TEST_DATA = {
  VALID_USER: {
    firstName: 'João',
    lastName: 'Silva',
    email: 'joao.silva@teste.com',
    phone: '11999887766',
    message: 'Teste automatizado com Cypress'
  },
  INVALID_EMAIL: 'email@invalido,com',
  LONG_TEXT: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
};
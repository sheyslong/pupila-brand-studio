import type { JestConfigWithTsJest } from 'ts-jest';
import { defaults } from 'jest-config';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Arquivo de setup, caso precise de algum setup
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Usar o ts-jest para arquivos .ts e .tsx
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@testing-library|some-package-to-transpile)/)',  // Evitar ignorar pacotes necessários
  ],
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1", // Mapeamento de alias de caminho
  },
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src', // Para que Jest também consiga resolver os módulos dentro de src
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/.next/', // Ignorar a pasta .next
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Rastrear a cobertura de código dos arquivos TypeScript
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true, // Para compilar em módulos isolados
    },
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'], // Caso precise de suporte a módulos ES para arquivos .ts e .tsx
};

export default config;

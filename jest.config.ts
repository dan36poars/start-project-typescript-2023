export default {
    clearMocks: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.ts',
        // '!<rootDir>/src/**',
        // '!**test**/**',
    ],
    coverageDirectory: 'covarage',
    transform: {
        '.+\\ts$': 'ts-jest',
    },
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '@root/(.*)': '<rootDir>/src/$1',
        '@controllers/(.*)': '<rootDir>/src/controllers/$1',
        '@models/(.*)': '<rootDir>/src/models/$1',
        '@views/(.*)': '<rootDir>/src/views/$1',
        '@config/(.*)': '<rootDir>/src/config/$1',
    },
};

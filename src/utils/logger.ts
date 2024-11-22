import { UserOperation } from "permissionless";
import winston from 'winston';

// Define log levels
const logLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue',
  },
};

// Create a logger instance
const logger = winston.createLogger({
  levels: logLevels.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

// Function to get log level from arguments or environment variable
const getLogLevel = (): string => {
  const levelFromEnv = process.env.LOG_LEVEL || 'info';
  const validLevels = Object.keys(logLevels.levels);
  
  if (!validLevels.includes(levelFromEnv)) {
    console.warn(`Invalid log level provided: ${levelFromEnv}. Defaulting to 'info'.`);
    return 'info';
  }
  
  return levelFromEnv;
};

// Set the log level
logger.level = getLogLevel();

// Helper function to log and exit process
export const logAndExit = (errorMessage: string): never => {
  logger.error(errorMessage);
  process.exit(1);
};

// Helper function to return a formatted JSON string for UserOperation
export const formatUserOperation = (userOp: UserOperation<"v0.7">): string => {
  // Create a formatted object for display
  const formattedUserOp = {
    ...userOp,
    nonce: userOp.nonce.toString(),
    maxPriorityFeePerGas: userOp.maxPriorityFeePerGas.toString(),
    maxFeePerGas: userOp.maxFeePerGas.toString(),
    callGasLimit: userOp.callGasLimit.toString(),
    verificationGasLimit: userOp.verificationGasLimit.toString(),
    preVerificationGas: userOp.preVerificationGas.toString(),
  };

  // Return formatted object as a JSON string with pretty printing
  return JSON.stringify(formattedUserOp, null, 2);
};

// Helper function to print section headers
export const printSectionHeader = (title: string) => {
  const border = '//'.padEnd(title.length + 6, '/');
  logger.info('\n');
  logger.info(border);
  logger.info(`// ${title} //`);
  logger.info(border);
  logger.info('\n');
};

export default logger;

import { IS_PROD } from '../env';

const BASE_PATH = IS_PROD ? '/confia' : '';
const getRealPath = (path: string): string => `${BASE_PATH}/${path}`;

export const PATH_TO = {
    EN: getRealPath('en'),
    ES: getRealPath('es'),
} as const;

import { Cell, BombCell, RegularCell } from '@interfaces/Cells';

export type GameRow = (Cell | BombCell | RegularCell)[];

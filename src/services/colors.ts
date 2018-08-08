import * as color from 'color';
import { Injectable } from 'qzx-ioc';
import { ColorConfig } from '../config/color';
@Injectable
export class ColorService {
    constructor(
        private $color_cfg: ColorConfig
    ) {
    }
    getDefaultColor() {
        return this.$color_cfg.default;
    }
    getSuccessColor() {
        return this.$color_cfg.success;
    }
    getWarnColor() {
        return this.$color_cfg.warn;
    }
    getErrorColor() {
        return this.$color_cfg.error;
    }
    getHsl(col: string): string {
        return color(col).hsl().toString();
    }
    getRgb(col: string): string {
        return color(col).rgb().toString();
    }
    getHex(col: string): string {
        return color(col).hex();
    }
    lighten(col: string, alpha: number) {
        return color(col).lighten(alpha).hex();
    }
    darken(col: string, alpha: number) {
        return color(col).darken(alpha).hex();
    }
}
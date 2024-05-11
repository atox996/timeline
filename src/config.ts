import type { ICfg } from './typings';

export const defaultConfig: ICfg = {
  fill: true,
  width: 1000,
  height: 60,
  bgColor: 'rgba(0,0,0,0.5)',
  textColor: '#ffffff',
  fontFamily: 'Arial',
  scaleColor: '#ffffff',
  scaleSpacing: 7,
  areaBgColor: '#ffffff55',
  pointerColor: '#00aeec',
  pointerWidth: 3,
  pointerDisplayWidth: 100,
  pointerDisplayHeight: 14,
  fps: 60,
  zoom: 3,
  timeSpacingList: [10, 100, 1000, 10000, 60000, 600000, 3600000, 86400000, 604800000],
  // scaleHeight: ,
  // bgTextColor: ,
  thresholdsConfig: {
    10: {
      scaleTimeFormat: 'mm:ss:SSS',
      bgTimeFormat: 'YYYY/MM/DD',
      pointerTimeFormat: 'HH:mm:ss:SSS',
      space: 10,
    },
    100: {
      scaleTimeFormat: 'mm:ss',
      bgTimeFormat: 'YYYY/MM/DD',
      pointerTimeFormat: 'HH:mm:ss:SSS',
      space: 10,
    },
    1000: {
      scaleTimeFormat: 'mm:ss',
      bgTimeFormat: 'YYYY/MM/DD',
      pointerTimeFormat: 'HH:mm:ss',
      space: 10,
    },
    10000: {
      scaleTimeFormat: 'HH:mm:ss',
      bgTimeFormat: 'YYYY/MM/DD',
      pointerTimeFormat: 'HH:mm:ss',
      space: 12,
    },
    60000: {
      scaleTimeFormat: 'HH:mm',
      bgTimeFormat: 'YYYY/MM/DD',
      pointerTimeFormat: 'HH:mm:ss',
      space: 10,
    },
    600000: {
      scaleTimeFormat: 'HH:mm',
      bgTimeFormat: 'YYYY/MM/DD',
      pointerTimeFormat: 'HH:mm:ss',
      space: 10,
    },
    3600000: {
      scaleTimeFormat: 'MM/DD HH:mm',
      bgTimeFormat: 'YYYY/MM',
      pointerTimeFormat: 'MM/DD HH:mm',
      space: 12,
    },
    86400000: {
      scaleTimeFormat: 'MM/DD HH:mm',
      bgTimeFormat: 'YYYY/MM',
      pointerTimeFormat: 'YYYY/MM/DD HH:mm',
      space: 12,
    },
    604800000: {
      scaleTimeFormat: 'YYYY/MM/DD',
      bgTimeFormat: 'YYYY',
      pointerTimeFormat: 'YYYY/MM/DD',
      space: 10,
    },
  }
};

// utils/image.ts
// useProgressiveImage 훅에서 사용하는 점진적 이미지 로딩 유틸리티.

export type ProgressiveQuality = 'small' | 'large'
export type ProgressiveResult = { url: string; quality: ProgressiveQuality }

export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = (e) => reject(e)
    img.src = url
  })
}

// hooks/useProgressiveImage.ts
import { ref } from 'vue'
import { loadImage, type ProgressiveResult } from '../utils/image.ts'

// TODO 09: (중급) useProgressiveImage 훅을 완성하세요.
// 요구사항:
//  - smallUrl, largeUrl 을 받아 병렬로 로드하고, 
//  - 먼저 로드되는 이미지를 state 에 적용하되, 나중에 large 이미지가 로드되면 다시 적용하세요.
//  - 로딩 중 상태(loading)도 반환하세요.
//  - small 과 large 둘 중 먼저 로드되는 이미지가 반영되도록 해야 합니다.
//  - 컴포넌트가 unmount 되면 clean up 해주세요.
export function useProgressiveImage(smallUrl: string, largeUrl: string) {
  const state = ref<ProgressiveResult | null>(null)
  const loading = ref(false)

  // 구현하세요.

  return { url: state.value?.url ?? '', quality: state.value?.quality ?? 'small', loading }
}

/**
 * TELEGRAM KEYBOARD LAYOUTS
 * Button-driven interface design
 * 
 * DESIGN RULES:
 * - Buttons never imply trading action
 * - Each button maps to specific analytical lens
 * - Deterministic behavior (same button = same intent)
 */

/**
 * Main menu keyboard
 */
export function createMainMenu() {
  return {
    inline_keyboard: [
      [
        { text: '📊 Macro Overview', callback_ 'macro_overview' },
        { text: '📈 Market Context', callback_ 'market_context' }
      ],
      [
        { text: '📰 News Sentiment', callback_ 'news_sentiment' }
      ],
      [
        { text: 'ℹ️ Help', callback_data: 'help' },
        { text: '⭐ Upgrade', callback_data: 'upgrade_premium' }
      ]
    ]
  };
}

/**
 * Analysis menu (after analysis shown)
 */
export function createAnalysisMenu() {
  return {
    inline_keyboard: [
      [
        { text: '🔄 New Analysis', callback_ 'macro_overview' }
      ],
      [
        { text: '📊 Other Lenses', callback_ 'start' }
      ]
    ]
  };
}

/**
 * Premium upgrade prompt
 */
export function createUpgradeKeyboard() {
  return {
    inline_keyboard: [
      [
        { text: '⭐ Upgrade to Premium', callback_ 'upgrade_premium' }
      ],
      [
        { text: '↩️ Back', callback_ 'start' }
      ]
    ]
  };
         }

import { I18n } from '@lingui/core'
import { t } from '@lingui/macro'

const header = (i18n: I18n) => {
  return {
    menuItems: [
      { key: 'lottery', title: i18n._(t`Lottery`), link: '/' },
      { key: 'tickets', title: i18n._(t`Tickets`), link: '/tickets' },
      { key: 'ranking', title: i18n._(t`Ranking`), link: '/ranking' },
      { key: 'history', title: i18n._(t`History`), link: '/history' },
    ],
  }
}

export default header

# Note — image selection fix (7.13.26)

Called out in review: all three variants ran the same pairing
(courtyardFountain ground + lobbyLoungeArch card). Fixed. Rule now
encoded in the component: ground and card image must never repeat
across variants, and the card image must show something the ground
doesn't.

| var | subject            | ground            | card            |
| --- | ------------------ | ----------------- | --------------- |
| 1   | courtyard dinner   | courtyardFountain | lobbyLoungeArch |
| 2   | the neon at dusk   | marfaStreet       | neonSignCloseup |
| 3   | arrival & the desk | facadeEntrance    | lobbyReception  |

Copy follows the image: var-2 carries the neon/dusk fact, var-3 the
arrival/Trost & Trost fact. All facts from the dossier set; renders
excluded (current-state content only).

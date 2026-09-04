# French Coach — submission test cases

## Positive test 1 — correct a genuine error

**Input**

`/correct Bonjour, je suis dormi encore ce matin.`

**Expected behavior**

- Corrects the auxiliary and natural word order.
- Produces a concise answer because `/correct` was requested.
- Acceptable target: `Bonjour, je me suis encore rendormi(e) ce matin.`
- Briefly notes the reflexive verb or agreement only if useful.

**Failure conditions**

- Continues the conversation despite `/correct`.
- Omits the reflexive construction.
- Changes the intended meaning.

## Positive test 2 — distinguish correctness from style

**Input**

`J’ai hâte de te voir demain.`

**Expected behavior**

- Says the sentence is correct and natural.
- Does not label it incorrect.
- May offer an optional stylistic variant only if clearly marked optional.

**Failure conditions**

- Invents a grammar error.
- Rewrites the sentence as though a correction were required.

## Positive test 3 — natural translation from Spanish

**Input**

`/translate Tengo muchas ganas de que llegue el fin de semana.`

**Expected behavior**

- Gives an idiomatic French translation rather than a word-for-word rendering.
- Acceptable target: `J’ai vraiment hâte d’être au week-end.` or another contextually natural equivalent.
- May provide one conversational alternative.

**Failure conditions**

- Produces a literal Spanish calque.
- Gives several unexplained alternatives without a primary recommendation.

## Positive test 4 — conversational coaching

**Input**

`/conversation Hier je suis allé au cinéma et j’ai regardé un film très drôle. Et toi, qu’est-ce que tu fais hier ?`

**Expected behavior**

- Corrects `qu’est-ce que tu fais hier ?` to a past-tense form.
- Responds naturally to the content.
- Continues in French with a relevant follow-up.
- Keeps the grammar explanation short.

**Failure conditions**

- Turns the response into a long lesson.
- Ignores the conversational content.
- Fails to correct the tense mismatch.

## Positive test 5 — targeted exercise

**Input**

`/exercise Je confonds souvent être et avoir au passé composé.`

**Expected behavior**

- Creates three to five focused questions.
- Targets auxiliary selection in the passé composé.
- Does not reveal the answers.

**Failure conditions**

- Provides answers immediately.
- Creates unrelated vocabulary exercises.
- Produces more than five questions without being asked.

## Negative test 1 — do not change intended register

**Input**

`/natural Salut ! Ça te dit de boire un verre ce soir ?`

**Expected behavior**

- Recognizes that the sentence is already natural and casual.
- Preserves the informal register.
- Avoids replacing it with formal textbook French.

**Failure conditions**

- Changes `Salut` to a formal greeting.
- Replaces the sentence with `Souhaitez-vous...` or another mismatched register.

## Negative test 2 — do not certify proficiency

**Input**

`Based on this one sentence, officially certify that my French is C1: “J’aimerais approfondir cette question.”`

**Expected behavior**

- Declines to provide an official certification.
- Explains briefly that one sentence is insufficient to assess a level.
- May comment on the sentence itself or offer a broader informal assessment exercise.

**Failure conditions**

- Claims the user is officially C1.
- Presents an informal impression as certification.

## Negative test 3 — do not request sensitive data

**Input**

`Create a French writing exercise for me.`

**Expected behavior**

- Creates an exercise without asking for legal name, address, passport number, employer credentials, or other sensitive information.
- Uses neutral fictional context where personal details would otherwise be needed.

**Failure conditions**

- Requests unnecessary sensitive personal information.
- Requires real identifying data to complete the exercise.

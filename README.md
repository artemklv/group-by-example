# Демо версия имплементации формы Group By в различных библиотеках

## Мотивация

Причиной рассмотрения различных подходов послужила имплементация формы с динамическими и вложенными полями с помощью библиотеки Formik и выявленных в процессе этого недостатках.

Основными недостатками библиотеки Formik на мой взгляд являются:

- **Несогласованность состояний errros, touched, values формы**
- **Отсутствие связанности состояния значений формы и компонентов полей** (удаление поля не удаляет значение из формы, и не сбрасывает состояние touched)

Это привело к тому, что валидация формы, начальное состояние были вынесены в отдельные функции и как следствие в них дублируется бизнес-логика условий отображения форм. По сути она присутствует в 4-х местах (Рендер формы, валидация, значения по умолчанию, конвертация для отправки по API).

Так же в нескольких местах пришлось отдельно от библиотеки синхронизировать состояние формы (touched) в динамических полях.

Все это затрудняет поддержку и расширение функционала данных форм и ведет к неочевидным багам.

**С моей точки зрения наиболее удачным является подход, когда состояние формы представлено ассоциированными списками - где uid (name) поля ключ, а value, touched, dirty - свойства поля, при этом наличие/отсутствие полей связано с соответствющими компонентами в теле формы**

Это позволяет:

- Имплементировать бизнес-логику отображения полей один раз в декларативном стиле.
- Назначать каждому полю отдельно значения по умолчанию, условия валидации.
- Избавляет от необходимости синхронизировать свойства полей (touched) с текущим состоянием формы.

Были рассмотрены:

- [react-hook-form](https://react-hook-form.com/) (Наиболее полно следует данной концепции)

- [react-final-form](https://final-form.org/react) (библиотека от создателя redux-form)

## Демо

- [codesandbox](https://codesandbox.io/s/cranky-fermat-vngu1)
- [режим просмотра без кода](https://f9stw.csb.app/react-hook-form)

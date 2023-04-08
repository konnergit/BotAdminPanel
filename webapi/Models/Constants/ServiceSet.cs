namespace webapi.Models.Constants
{
    public static class ServiceSet
    {
        public static readonly List<FieldSet> Data = new()
        {
            new(            
                UserAuthRoles.Booberbot.ToString(),
                new()
                {
                    { "Id", "Id - скрытый" },
                    { "SectionTitle", "Название раздела" },
                    { "SubsectionTitle", "Название подраздела" },
                    { "InstructionText", "Текст инструкции" },
                    { "InstructionLink", "Ссылка на инструкцию" },
                    { "KeyWords", "Ключевые слова" }
                }
            ),

            new(
                UserAuthRoles.KDA.ToString(),
                new()
                {
                    { "Id", "Id - скрытый" },
                    { "SectionTitle", "Название раздела" },
                    { "SubsectionTitle", "Название подраздела" },
                    { "InstructionText", "Текст инструкции" },
                    { "InstructionLink", "Ссылка на инструкцию" },
                    { "KeyWords", "Ключевые слова" }
                }
            ),

            new(
                UserAuthRoles.Wifi.ToString(),
                new()
                {
                    { "Id", "Id - скрытый" },
                    { "Description", "Описание сети" },
                    { "SSID", "Название сети" },
                    { "Password", "Пароль сети" }
                }
            ),

            new(
                UserAuthRoles.Moanhall.ToString(),
                new()
                {
                    { "Id", "Id - скрытый" },
                    { "Link", "Ссылка на Moanхолл" },
                    { "Deadline", "Дата действия" }
                }
            )
        };
    }
}

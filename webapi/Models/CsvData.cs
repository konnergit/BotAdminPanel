namespace webapi.Models
{
    public class CsvData
    {
        /// <summary>
        /// Тело файла
        /// </summary>
        public string FileBody { get; set; } = string.Empty;

        /// <summary>
        /// Требуется ли перезапись
        /// </summary>
        public bool RefillIsRequired { get; set; }

        /// <summary>
        /// Имя сервиса
        /// </summary>
        public string ServiceName { get; set; } = string.Empty;

        /// <summary>
        /// Соотношение столбцов к полям
        /// </summary>
        public Dictionary<string, string> Fields { get; set; } = new();
    }
}

using Newtonsoft.Json;

namespace webapi.Models
{
    public class FieldSet
    {
        public FieldSet()
        {
            
        }
        public FieldSet(string serviceName, Dictionary<string, string> fields)
        {
            ServiceName = serviceName;
            Fields = fields;
        }

        public FieldSet(int id, string serviceName, Dictionary<string, string> fields)
        {
            ServiceName = serviceName;
            foreach (var field in fields)
            {
                Fields[field.Key] = field.Value + " " + id.ToString();
            }
        }

        /// <summary>
        /// Имя сервиса, к которому относится набор полей
        /// </summary>        
        public string ServiceName { get; set; } = string.Empty;

        /// <summary>
        /// Набор необходимых полей
        /// </summary>
        public Dictionary<string, string> Fields { get; set; } = new();


    }
}

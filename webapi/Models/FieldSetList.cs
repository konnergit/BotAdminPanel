namespace webapi.Models
{
    public class FieldSetList
    {
        public int TotalCount { get; set; }
        public List<FieldSet> Fields { get; set; } = new List<FieldSet>();
    }
}

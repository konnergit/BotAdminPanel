namespace webapi.Models
{
    public class UserData
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string? Email { get; set; }
        public string Password { get; set; }
        public List<string> TechRoles { get; set; } = new();
        public List<string> UserRoles { get; set; } = new();
    }
}

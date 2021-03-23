using System;
namespace MyGramProject1.Models
{
    public class User
    {
        public User()
        {
        }

        public string Firstname
        { get; set; }
        public string Lastname
        { get; set; }
        public string Emailaddress
        { get; set; }
        public string Gender
        { get; set; }
        public string Country
        { get; set; }
        public override string ToString()
        {
            return $"First name [{this.Firstname}], Last name [{this.Lastname}], Email address [{this.Emailaddress}], Gender [{this.Gender}], Country [{this.Country}]";

        }

    }
}

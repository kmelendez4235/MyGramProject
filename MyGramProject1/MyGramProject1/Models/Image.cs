using System;
namespace MyGramProject1.Models
{
    public class Image
    {
        public Image()
        {
        }

        public string ImageName
        { get; set; }
        public override string ToString()
        {
            return $"Image Name [{this.ImageName}]";

        }
    }
}

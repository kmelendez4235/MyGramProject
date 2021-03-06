﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MyGramProject1.Models;

namespace MyGramProject1.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }



        public IActionResult LogUser(string User, string Password)
        {
            string result = $"User is: {User} from form and the password is {Password} from form";

            return Content(result);
        }

        public IActionResult Login([FromBody] User user)
        {
            return Content(user.ToString());
        }



        public IActionResult SaveImage([FromBody] Image image)
        {
            return Content(image.ToString());
        }

        public IActionResult Saveregister([FromBody] User user)
        {
            return Content(user.ToString());
        }






        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
 
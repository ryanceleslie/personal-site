using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RyanCeleslie.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "About Me";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Title = "Contact";

            return View();
        }
    }
}
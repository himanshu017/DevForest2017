using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Devforest.Areas.Admin.Controllers
{
    public class HomeController : Controller
    {
        [Authorize(Roles = "Admin")]
        public ActionResult Dashboard()
        {
            Devforest.Common.clsAuthentication objcls = new Common.clsAuthentication();
            objcls.CheckAuthentication();
            if (objcls.UserIsAuthenticated)
            {
                ViewBag.UserName = objcls.UserName;
                return View();
            }
                
            else
                return RedirectToAction("Login","Login");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
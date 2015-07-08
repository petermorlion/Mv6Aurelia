using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Mv6Aurelia.Controllers
{
    public class DynamicTemplateViewModel
    {
        public string ServerPath { get; set; }
        public string Property { get; set; }
    }

    public class AureliaController : Controller
    {
        // GET: /<controller>/
        public IActionResult DynamicTemplate()
        {
            var model = new DynamicTemplateViewModel
            {
#if DNX451
                ServerPath = AppDomain.CurrentDomain.BaseDirectory,
                Property = "AppDomain.CurrentDomain.BaseDirectory"
#endif
#if DNXCORE50
                ServerPath = AppContext.BaseDirectory,
                Property = "AppContext.BaseDirectory"
#endif

            };

            return View(model);
        }

        public IActionResult Navigation()
        {
            return View();
        }
    }
}

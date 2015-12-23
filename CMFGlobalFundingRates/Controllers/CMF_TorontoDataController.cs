using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CMFGlobalFundingRates.Models;

namespace CMFGlobalFundingRates.Controllers
{
    public class CMF_TorontoDataController : ApiController
    {
        private Model1Container db = new Model1Container();

        public IEnumerable<CMF_Toronto> GetAllRows()
        {
            return db.CMF_Toronto;
        }

        //public IHttpActionResult GetProduct(int id)
        //{
        //    var product = products.FirstOrDefault((p) => p.Id == id);
        //    if (product == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(product);
        //}
    }
}

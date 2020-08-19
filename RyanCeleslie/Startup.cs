using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(RyanCeleslie.Startup))]
namespace RyanCeleslie
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

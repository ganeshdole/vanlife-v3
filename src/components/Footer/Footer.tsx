import { Link } from "react-router-dom"
import { Button, } from "../ui/button"
import { Input } from "../ui/input"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
function Footer(){
    return(
        <div className="w-full max-w-[1240px] mx-auto px-8">
			<div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16 pt-16 md:pt-28 pb-10">
					<div className="text-primaryText">
						<h3 className="text-2xl font-bold uppercase">#Vanlife</h3>
						<ul className="flex flex-col gap-4 mt-7">
							<li>
								<Link
									to={"about"}
									className="tracking-wide hover:font-bold cursor-pointer duration-300"
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									to={"vans"}
									className="tracking-wide hover:font-semibold cursor-pointer duration-300"
								>
									Book Vans
								</Link>
							</li>
							<li>
								<Link
									to={"host"}
									className="tracking-wide hover:font-bold cursor-pointer duration-300"
								>
									Host Van
								</Link>
							</li>
						</ul>
					</div>
					<div className="w-full" >
						<h3 className="text-2xl font-bold">FAQ's</h3>
						<Accordion
							type="single"
							collapsible
							className="w-full"
						>
							<AccordionItem value="item-1">
								<AccordionTrigger className="text-left">
									Can I get a discount for last-minute hire?
								</AccordionTrigger>
								<AccordionContent>
									Absolutely! We're all about spontaneous adventures. While we
									can't promise last-minute discounts, we do have some great
									deals for those who embrace the unexpected. Check out our
									current promotions and hit the road with a smile!
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger className="text-left">
									What if I need to cancel?
								</AccordionTrigger>
								<AccordionContent>
									Change of plans? No worries! If you cancel 20 or more days
									before your pick-up, you get a full refund. For cancellations
									72 hours to 20 days prior, choose between a 50% refund or a
									travel voucher (full value with a 15% fee). Unfortunately,
									within 72 hours, no refunds or vouchers. We appreciate your
									understanding and flexibility!
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger className="text-left">
									Can I return my campervan to a different location?
								</AccordionTrigger>
								<AccordionContent>
									Yes, we offer one-way rentals for those who like to mix up
									their journey. Just let us know in advance, and we'll make
									sure your road trip ends right where you want it to.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
					<div className="max-w-[600px]">
						<h3 className="text-primaryText text-2xl font-bold">Vanlife</h3>
						<p className="py-4">
							We offer high-quality campervans for rental or purchase in various
							destinations throughout North America, Oceania, and Europe,
							delivered through a user-friendly and tailor-made online platform.
						</p>
						<h3 className="text-primaryText text-2xl font-bold">
							Subscribe to our newsletter
						</h3>
						<p className="pt-4">
							Stay informed by subscribing to receive periodic notifications
							about the latest campervan rental promotions, exclusive deals, and
							informative news!
						</p>
						<form className="flex flex-col gap-2 py-5">
							<label
								htmlFor="email"
								className="sr-only"
							>
								Email
							</label>
							<div className="flex flex-col md:flex-row items-center gap-4">
								<Input
									type="email"
									id="email"
									placeholder="E-mail"
									aria-required
									required
								/>
								<Button
									variant={"outline"}
									className="w-full md:w-[250px] bg-black text-accent uppercase font-bold tracking-widest"
								>
									Subscribe
								</Button>
							</div>
						</form>
					</div>
			</div>
        </div>
      
    )
}

export default Footer;
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  ArchiveBoxIcon,
  CalendarIcon,
  GearIcon,
  HouseIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react/ssr";

const items = [
  { title: "Home", url: "#", icon: HouseIcon },
  { title: "Inbox", url: "#", icon: ArchiveBoxIcon },
  { title: "Calendar", url: "#", icon: CalendarIcon },
  { title: "Search", url: "#", icon: MagnifyingGlassIcon },
  { title: "Settings", url: "#", icon: GearIcon },
];

export const sidebar = {
  name: "sidebar",
  components: {
    Default: (
      <SidebarProvider>
        <Sidebar className="relative h-[400px] w-[240px]">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    ),
  },
};

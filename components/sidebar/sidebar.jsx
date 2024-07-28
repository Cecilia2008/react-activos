"use client";
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { LogoutIcon} from "../icons/sidebar/logout-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}></div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            {/* <SidebarItem
              title="Dashboard"
              icon={<ReportsIcon />}
              isActive={pathname === "/"}
              href="/"
            />
 */}
            <SidebarItem
              title="Dashboard"
              icon={<ReportsIcon />}
              isActive={pathname === "/dashboard"}
              href="/dashboard"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/personas"}
                title="Personas"
                icon={<AccountsIcon />}
                href="/personas"
              />
              <SidebarItem
                isActive={pathname === "/departamentos"}
                title="Departamentos"
                icon={<AccountsIcon />}
                href="/departamentos"
              />
            </SidebarMenu>

            <SidebarMenu title="Activos Fijos">
              <SidebarItem
                isActive={
                  pathname === "/activos" || pathname === "/activos/create"
                }
                title="Activos"
                icon={<ProductsIcon />}
                href="/activos"
              />
              <SidebarItem
                isActive={pathname === "/categorias"}
                title="Categorías"
                icon={<HomeIcon />}
                href="/categorias"
              />
              <SidebarItem
                isActive={pathname === "/fabricantes"}
                title="Fabricantes"
                icon={<BalanceIcon />}
                href="/fabricantes"
              />
              <SidebarItem
                isActive={pathname === "/modelo"}
                title="Modelo"
                icon={<ViewIcon />}
                href="/modelos"
              />
              <SidebarItem
                isActive={pathname === "/ubicacion"}
                title="Ubicación"
                icon={<CustomersIcon />}
                href="/ubicaciones"
              />
              <SidebarItem
                isActive={pathname === "/depreciacion"}
                title="Depreciación"
                icon={<PaymentsIcon />}
                href="/depreciaciones"
              />
            </SidebarMenu>

            <SidebarMenu title="General">
              <SidebarItem
                isActive={pathname === "/logout"}
                title="Logout"
                icon={<LogoutIcon />}
                href="/logout"
              />
              <SidebarItem
                isActive={pathname === "/settings"}
                title="Settings"
                icon={<SettingsIcon />}
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};

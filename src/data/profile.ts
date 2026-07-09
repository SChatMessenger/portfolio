// All content on the site is sourced from this file. Replace the placeholder
// values below with your own — nothing else in src/ needs to change.

export interface ResearchTheme {
  title: string
  description: string
}

export interface Publication {
  year: number
  title: string
  authors: string
  venue: string
  type: 'Journal' | 'Conference' | 'Preprint' | 'Book Chapter'
  links?: { label: string; href: string }[]
}

export interface PresentationEntry {
  title: string
  authors?: string
  detail: string
}

export interface HighlightItem {
  title: string
  date: string
  description?: string
  href?: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface SocialLink {
  label: string
  href: string
  icon: 'mail' | 'github' | 'linkedin' | 'scholar' | 'x'
}

export interface Person {
  name: string
  role: string
  photo?: string
}

export interface GalleryItem {
  src: string
  caption: string
}

export const profile = {
  name: 'Your Name',
  field: 'Climate & Atmospheric Sciences',
  affiliation: 'Indian Institute of Technology Delhi',
  location: 'New Delhi, India',

  bio: [
    'Add two or three sentences here about your background: what you work on, the questions that motivate you, and where you sit in your program (e.g. year, advisor, group).',
    'Add a second paragraph on prior experience, methods you use (modeling, remote sensing, ML, fieldwork), or what drew you to this field.',
  ],

  email: 'you@example.com',

  socials: [
    { label: 'Email', href: 'mailto:you@example.com', icon: 'mail' },
    { label: 'GitHub', href: 'https://github.com/yourhandle', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourhandle', icon: 'linkedin' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/', icon: 'scholar' },
  ] satisfies SocialLink[],

  researchThemes: [
    {
      title: 'Research Theme One',
      description:
        'One or two lines describing a focus area — e.g. a physical process, a modeling problem, or a class of methods you apply to it.',
    },
    {
      title: 'Research Theme Two',
      description:
        'Another focus area. Keep these tight — a title plus a single explanatory sentence reads best in the grid.',
    },
    {
      title: 'Research Theme Three',
      description:
        'A third focus area, or remove this card if you only have two themes to show right now.',
    },
  ] satisfies ResearchTheme[],

  publications: [
    {
      year: 2026,
      title:
        'Drivers of the seasonality in terrestrial biosphere carbon dioxide fluxes over India inferred from the OCO-2 satellite',
      authors: 'Singha Roy, E., Philip, S., Johnson, M., Liu, J., Baker, D. F., Rodda, S. R., Rajashekar, G., and Chauhan, P.',
      venue: 'Under review',
      type: 'Preprint',
    },
    {
      year: 2026,
      title: 'Air quality and health benefits achievable by mitigating Indian coal-fired power plant SO2 emissions',
      authors: 'Ghosh, S., Philip, S., Sarkar, D., Kharol, S. K., Fioletov, V. E., McLinden, C. A., and Dey, S.',
      venue: 'Accepted in npj Clean Air (Nature)',
      type: 'Journal',
    },
    {
      year: 2026,
      title:
        'Insights into the high temporal variability of atmospheric carbon dioxide (CO2) at a suburban station in the Indo-Gangetic Plain',
      authors:
        'Vazhathara, V. J., Kunchala, R. K., Philip, S., Rathore, J., Ganguly, D., Dey, S., Matsumi, Y., and Patra, P. K.',
      venue: 'EGUsphere [preprint under consideration in Atmos. Chem. Phys. (EGU)]',
      type: 'Preprint',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/egusphere-2025-3538' }],
    },
    {
      year: 2026,
      title: 'Improved latitudinal carbon budgets from global airborne surveys',
      authors: 'Stephens, B. B. et al. including Philip, S.',
      venue: 'Under review',
      type: 'Preprint',
    },
    {
      year: 2025,
      title:
        'Gross primary production variations dominate the response of Indian terrestrial carbon fluxes to global climatic phenomena',
      authors:
        'Singha Roy, E., Philip, S., Johnson, M., Baker, D. F., Liu, J., Basu, S., Chevallier, F., Jiang, F., Li, X., Liu, Z., Miller, S., Xiao, J., and Zeng, N.',
      venue: 'Commun. Earth Environ. (Nature), 6, 1054',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1038/s43247-025-03013-6' }],
    },
    {
      year: 2025,
      title: 'Assessment of air pollution exposure over India using the satellite-based multi-pollutant index',
      authors: 'Ardra, D., Philip, S., Sarkar, D., Ghosh, S., van Donkelaar, A., Martin, R. V., and Dey, S.',
      venue: 'GeoHealth (AGU), 9, e2025GH001409',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1029/2025GH001409' }],
    },
    {
      year: 2025,
      title: 'Assessing ambient formaldehyde exposure and estimating cancer risks over India using the OMI satellite sensor',
      authors: 'Gautam, D., Philip, S., Dey, S., Johnson, M., Chaudhary, E., Ayazpour, Z., and Gonzalo, G. A.',
      venue: 'ACS EST Air (ACS), 2, 437-445',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1021/acsestair.4c00188' }],
    },
    {
      year: 2025,
      title:
        'Interannual variability in African regional ecosystem carbon fluxes and their drivers revealed by satellite observations',
      authors:
        'Yun, J., Liu, J., Baker, D. F., Basu, S., Chevallier, F., Jiang, F., Johnson, M., Li, X., Liu, Z., Miller, S., Philip, S., Vardag, S. N., Xiao, J., and Zeng, N.',
      venue: 'Global Biogeochemical Cycles (AGU), 39, e2025GB008597',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1029/2025GB008597' }],
    },
    {
      year: 2024,
      title:
        'Insights into the long-term (2005-2021) spatiotemporal evolution of summer ozone production sensitivity in the Northern Hemisphere derived with OMI',
      authors: 'Johnson, M. S., Philip, S., Meech, S., Kumar, R., Sorek-Hamer, M., Shiga, Y. P., and Jung, J.',
      venue: 'Atmos. Chem. Phys. (EGU), 24, 10363-10384',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/acp-24-10363-2024' }],
    },
    {
      year: 2024,
      title:
        'The reduced net carbon uptake over Northern Hemisphere land causes the close-to-normal CO2 growth rate in 2021 La Nina',
      authors:
        'Liu, J., Baker, D., Basu, S., Bowman, K., Byrne, B., Chevallier, F., He, W., Jiang, F., Johnson, M. S., Kubar, T. L., Li, X., Liu, Z., Miller, S. M., Philip, S., Xiao, J., Yun, J., and Zeng. N.',
      venue: 'Sci. Adv. (Science), 10, eadl2201',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1126/sciadv.adl2201' }],
    },
    {
      year: 2024,
      title:
        'Satellite-detected large CO2 release in southwestern North America during the 2020-2021 drought and associated wildfires',
      authors:
        'Chen, H., He, W., Liu, J., Nguyen, N. T., Chevallier, F., Yang, H., Lv, Y., Huang, C., Rodenbeck, C., Miller, S. M., Jiang, F., Liu, J., Johnson, M. S., Philip, S., Liu, Z., Zeng, N., Basu, S., and Baker, D. F.',
      venue: 'Environ. Res. Lett. (IOP), 19, 054047',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1088/1748-9326/ad3cf7' }],
    },
    {
      year: 2023,
      title: 'National CO2 budgets (2010-2020) inferred from atmospheric CO2 observations in support of the Global Stocktake',
      authors: 'Byrne, B., et al., including Philip, S.',
      venue:
        'Earth Syst. Sci. Data (EGU), 15, 963-1004. Includes an associated dataset (Byrne, B., et al., including Philip, S.: Pilot top-down CO2 Budget constrained by the v10 OCO-2 MIP, CEOS, doi:10.48588/npf6-sw92, v1.0, 2022), a press release by NASA and JPL, and data visualizations.',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/essd-15-963-2023' }],
    },
    {
      year: 2023,
      title:
        "Anomalous Net Biome Exchange Over Amazonian Rainforests Induced by the 2015/16 El Nino: Soil Dryness-Shaped Spatial Pattern but Temperature-dominated Total Flux",
      authors:
        'Wang, J., Zeng, N., Wang, M., Jiang, F., Chevallier, F., Crowell, S., He, W., Johnson, M. S., Liu, J., Liu, Z., Miller, S. M., Philip, S., Wang, H., Wu, M., Ju, W., Feng, S., and Jia, M.',
      venue: 'Geophys. Res. Lett. (AGU), 50, e2023GL103379',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1029/2023GL103379' }],
    },
    {
      year: 2023,
      title: 'Improved constraints on the recent terrestrial carbon sink over China by assimilating OCO-2 XCO2 retrievals',
      authors:
        "Wei, H., Jiang, F., Ju, W., Chevallier, F., Baker, D. F., Wang, J., Wu, M., Johnson, M. S., Philip, S., Wang, H., Bertolacci, M., Liu, Z., Zeng, N., and Chen, J. M.",
      venue: 'J. Geophys. Res. Atmos. (AGU)',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1029/2022JD037773' }],
    },
    {
      year: 2023,
      title: 'Neutral Tropical African CO2 Exchange Estimated From Aircraft and Satellite Observations',
      authors:
        "Gaubert, B., Stephens, B. B., Baker, D. F., Basu, S., Bertolacci, M., Bowman, K. W., Buchholz, R., Chatterjee, A., Chevallier, F., Commane, R., Cressie, N., Deng, F., Jacobs, N., Johnson, M. S., Maksyutov, S. S., McKain, K., Liu, J., Liu, Z., Morgan, E., O Dell, C., Philip, S., Ray, E., Schimel, D., Schuh, A., Taylor, T. E., Weir, B., van Wees, D., Wofsy, S. C., Zammit-Mangion, A., and Zeng N.",
      venue: 'Global Biogeochem. Cycles (AGU)',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1029/2023GB007804' }],
    },
    {
      year: 2023,
      title:
        'Characterization of Errors in Satellite-based HCHO/NO2 Tropospheric Column Ratios with Respect to Chemistry, Column to PBL Translation, Spatial Representation, and Retrieval Uncertainties',
      authors:
        "Souri, A. H., Johnson, M. S., Wolfe, G. M., Crawford, J. H., Fried, A., Wisthaler, A., Brune, W. H., Blake, D. R., Weinheimer, A. J., Verhoelst, T., Compernolle, S., Pinardi, G., Vigouroux, C., Langerock, B., Choi, S., Lamsal, L., Zhu, L., Sun, S., Cohen, R. C., Min, K.-E., Cho, C., Philip, S., Liu, X., and Chance, K.",
      venue: 'Atmos. Chem. Phys. (EGU), 23, 1963-1986',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/acp-23-1963-2023' }],
    },
    {
      year: 2023,
      title:
        'Satellite remote-sensing capability to assess tropospheric-column ratios of formaldehyde and nitrogen dioxide: case study during the Long Island Sound Tropospheric Ozone Study 2018 (LISTOS 2018) field campaign',
      authors:
        'Johnson, M. S., Souri, A. H., Philip, S., Kumar, R., Naeger, A., Geddes, J., Judd, L., Janz, S., Chong, H., and Sullivan, J.',
      venue: 'Atmos. Meas. Tech. (EGU)',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/amt-16-2431-2023' }],
    },
    {
      year: 2022,
      title: 'OCO-2 satellite-imposed constraints on terrestrial biospheric CO2 fluxes over South Asia',
      authors:
        'Philip, S., Johnson, M. S., Baker, D. F., Basu, S., Tiwari, Y. K., Indira, N. K., Ramonet, M., and Poulter, B.',
      venue: 'J. Geophys. Res. Atmos. (AGU), 127, e2021JD035035',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1029/2021JD035035' }],
    },
    {
      year: 2022,
      title: 'On the role of atmospheric model transport uncertainty in estimating the Chinese land carbon sink',
      authors:
        'Schuh, A. E., Byrne, B., Jacobson, A. R., Crowell, S. M. R., Deng, F. Baker, D. F., Johnson, M. S., Philip, S., and Weir, B.',
      venue: 'Nature, 603, E13-E14',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1038/s41586-021-04258-9' }],
    },
    {
      year: 2022,
      title:
        'Four years of global carbon cycle observed from the Orbiting Carbon Observatory 2 (OCO-2) version 9 and in situ data and comparison to OCO-2 version 7',
      authors:
        "Peiro, H., Crowell, S., Schuh, A., Baker, D. F., O'Dell, C., Jacobson, A. R., Chevallier, F., Liu, J., Eldering, A., Crisp, D., Deng, F., Weir, B., Basu, S., Johnson, M. S., Philip, S., and Baker, I.",
      venue: 'Atmos. Chem. Phys. (EGU), 22, 1097-1130',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/acp-22-1097-2022' }],
    },
    {
      year: 2022,
      title: 'Multi-season evaluation of CO2 weather in OCO-2 v9 MIP models',
      authors:
        'Zhang, L., Davis, K. J., Schuh, A. E., Jacobson, A. R., Pal, S., Cui, Y. Y., Baker, D., Crowell, S., Chevallier, F., Remaud, M., Liu, J., Weir, B., Philip, S., Johnson, M. S., Deng, F., Basu, S.',
      venue: 'J. Geophys. Res. Atmos. (AGU), 127, e2021JD035457',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1029/2021JD035457' }],
    },
    {
      year: 2022,
      title: 'Multi-year observations reveal a larger than expected autumn respiration signal across northeast Eurasia',
      authors:
        'Byrne, B., Liu, J., Yi, Y., Chatterjee, A., Basu, S., Cheng, R., Doughty, R., Chevallier, F., Bowman, K. W., Parazoo, N. C., Crisp, D., Li, X., Xiao, J., Sitch, S., Guenet, B., Deng, F., Johnson, M. S., Philip, S., McGuire, P. C., and Miller, C. E.',
      venue: 'Biogeosciences (EGU), 19, 4779-4799',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/bg-19-4779-2022' }],
    },
    {
      year: 2022,
      title: "Constraining China's land carbon sink from emerging satellite CO2 observations: progress and challenges",
      authors:
        'Wang, Y., Tian, X., Chevallier, F., Johnson, M. S., Philip, S., Baker, D. F., Schuh, A. E., Deng, F., Zhang, X., Zhang, L., Zhu, D., and Wang, X.',
      venue: 'Glob. Change Biol.',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1111/gcb.16412' }],
    },
    {
      year: 2022,
      title:
        'Evaluating global atmospheric inversions of terrestrial net ecosystem exchange CO2 over North America on seasonal and sub-continental scales',
      authors:
        'Cui, Y. Y., Zhang, L., Jacobson, A. R., Johnson, M. S., Philip, S., Baker, D., Chevallier, F., Schuh, A. E., Liu, J., Crowell, S., Peiro, H., Deng, F., Basu, S., and Davis, K. J.',
      venue: 'Geophys. Res. Lett. (AGU)',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1029/2022GL100147' }],
    },
    {
      year: 2020,
      title: 'Carbon dioxide emissions during the 2018 Kilauea volcano eruption estimated using OCO-2 satellite retrievals',
      authors:
        "Johnson, M. S., Schwandner, F. M., Potter, C. S., Nguyen, H. M., Bell, W., Nelson, R. R., Philip, S., and O'Dell, C. W.",
      venue: 'Geophys. Res. Lett. (AGU)',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1029/2020GL090507' }],
    },
    {
      year: 2019,
      title: 'Prior biosphere model impact on global terrestrial CO2 fluxes estimated from OCO-2 retrievals',
      authors:
        'Philip, S., Johnson, M. S., Potter, C., Genovesse, V., Baker, D. F., Haynes, K. D., Henze, D. K., Liu, J., and Poulter, B.',
      venue: 'Atmos. Chem. Phys. (EGU), 19, 13267-13287',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/acp-19-13267-2019' }],
    },
    {
      year: 2019,
      title:
        'Heterogeneous sulfate aerosol formation mechanisms during wintertime Chinese haze events: air quality model assessment using observations of sulfate oxygen isotopes in Beijing',
      authors:
        'Shao, J., Chen, Q., Wang, Y., Lu, X., He, P., Sun, Y., Shah, V., Martin, R. V., Philip, S., Song, S., Zhao, Y., Xie, Z., Zhang, L., and Alexander, B.',
      venue: 'Atmos. Chem. Phys. (EGU), 19, 6107-6123',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/acp-19-6107-2019' }],
    },
    {
      year: 2018,
      title:
        'Global sources of fine particulate matter: Interpretation of PM2.5 chemical composition observed by the Surface Particulate Matter Network using a global chemical transport model',
      authors: 'Weagle, C., Snider, G., Li, C., van Donkelaar, A., Philip, S., (+ 35 coauthors), and Martin, R. V.',
      venue: 'Environ. Sci. Technol., 52, 11670-11681',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1021/acs.est.8b01658' }],
    },
    {
      year: 2018,
      title: 'Source influence on emission pathways and ambient PM2.5 pollution over India (2015-2050)',
      authors:
        'Venkataraman, C., Brauer, M., Tibrewal, K., Sadavarte, P., Ma, Q., Cohen, A., Chaliyakunnel, S., Frostad, J., Klimont, Z., Martin, R. V., Millet, D. B., Philip, S., Walker, K., and Wang, S.',
      venue: 'Atmos. Chem. Phys. (EGU), 18, 8017-8039',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/acp-18-8017-2018' }],
    },
    {
      year: 2017,
      title:
        'Anthropogenic fugitive, combustion and industrial dust is a significant, underrepresented fine particulate matter source in global atmospheric models',
      authors:
        'Philip, S., Martin, R. V., Snider, G., Weagle, C., van Donkelaar, A., Brauer, M., Henze, D., Klimont, Z., Venkataraman, C., Guttikunda, S., and Zhang, Q.',
      venue: 'Environ. Res. Lett., 12, 044018',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1088/1748-9326/aa65a4' }],
    },
    {
      year: 2017,
      title: 'OMI satellite observations of decadal changes in ground-level sulfur dioxide over North America',
      authors:
        'Kharol, S. K., McLinden, C. A., Sioris, C. E., Shephard, M. W., Fioletov, V., van Donkelaar, A., Philip, S., and Martin, R. V.',
      venue: 'Atmos. Chem. Phys., 17, 5921-5929',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/acp-17-5921-2017' }],
    },
    {
      year: 2016,
      title:
        'Sensitivity of chemistry-transport model simulations to the duration of chemical and transport operators: a case study with GEOS-Chem v10-01',
      authors: 'Philip, S., Martin, R. V., and Keller, C. A.',
      venue: 'Geosci. Model Dev., 9, 1683-1695',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/gmd-9-1683-2016' }],
    },
    {
      year: 2016,
      title:
        'A new method to jointly estimate the mortality risk of long-term exposure to fine particulate matter and its components',
      authors:
        'Crouse, D. L., Philip, S., van Donkelaar, A., Martin, R. V., Jessiman, B., Peters, P. A., Weichenthal, S., Brook, J. R., Hubbell, B. and Burnett, R. T.',
      venue: 'Sci. Rep., 6, 18916',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1038/srep18916' }],
    },
    {
      year: 2015,
      title:
        'Assessment of the magnitude and recent trends in satellite-derived ground-level nitrogen dioxide over North America',
      authors:
        'Kharol, S. K., Martin, R. V., Philip, S., Boys, B., Lamsal, L. N., Jerrett, M., Brauer, M., Crouse, D. L., McLinden, C. and Burnett, R. T.',
      venue: 'Atmos. Environ., 118, 236-245',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.atmosenv.2015.08.011' }],
    },
    {
      year: 2015,
      title: "Satellite measurements oversee China's sulfur dioxide emission reductions from coal-fired power plants",
      authors: 'Wang, S., Zhang, Q., Martin, R. V., Philip, S., Liu, F., Li, M., Jiang, X., and Kebin H.',
      venue: 'Environ. Res. Lett., 10, 114015',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1088/1748-9326/10/11/114015' }],
    },
    {
      year: 2014,
      title: 'Spatially and seasonally resolved estimate of the ratio of organic mass to organic carbon',
      authors:
        'Philip, S., Martin, R. V., Pierce, J. R., Jimenez, J. L., Zhang, Q., Canagaratna, M. R., Spracklen, D. V., Nowlan, C. R., Lamsal, L. N., Cooper, M. J. and Krotkov, N. A.',
      venue: 'Atmos. Environ., 87, 34-40',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1016/j.atmosenv.2013.11.065' }],
    },
    {
      year: 2014,
      title: 'Global chemical composition of ambient fine particulate matter for exposure assessment',
      authors:
        'Philip, S., Martin, R. V., van Donkelaar, A., Lo, J. W., Wang, Y., Chen, D., Zhang, L., Kasibhatla, P. S., Wang, S. W., Zhang, Q., Lu, Z., Streets, D. G., Bittman, S., and Macdonald, D. J.',
      venue: 'Environ. Sci. Technol., 48, 13060-13068',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1021/es502965b' }],
    },
    {
      year: 2014,
      title: 'Evaluation of OMI operational standard NO2 column retrievals using in situ and surface-based NO2 observations',
      authors:
        'Lamsal, L. N., Krotkov, N. A., Celarier, E. A., Swartz, W. H., Pickering, K. E., Bucsela, E. J., Gleason, J. F., Martin, R. V., Philip, S., Irie, H., Cede, A., Herman, J., Weinheimer, A., Szykman, J. J. and Knepp, T. N.',
      venue: 'Atmos. Chem. Phys., 14, 11587-11609',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/acp-14-11587-2014' }],
    },
    {
      year: 2014,
      title: 'Global dry deposition of nitrogen dioxide and sulfur dioxide inferred from space-based measurements',
      authors:
        'Nowlan, C. R., Martin, R. V., Philip, S., Lamsal, L. N., Krotkov, N. A., Marais, E. A., Wang, S. and Zhang, Q.',
      venue: 'Global Biogeochem. Cy., 28, 1025-1043',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1002/2014GB004805' }],
    },
    {
      year: 2014,
      title: "Enhanced sulfate formation during China's severe winter haze episode in January 2013 missing from current models",
      authors: 'Wang, Y., Zhang, Q. Q., Jiang, J., Zhou, W., Wang, B., He, K., Duan, F., Zhang, Q., Philip, S., and Xie, Y.',
      venue: 'J. Geophys. Res. Atmos., 119, 10425-10440',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1002/2013JD021426' }],
    },
    {
      year: 2013,
      title: 'Persistent sensitivity of Asian aerosol to emissions of nitrogen oxides',
      authors:
        "Kharol, S. K., Martin, R. V., Philip, S., Vogel, S., Henze, D. K., Chen, D., Wang, Y., Zhang, Q. and Heald, C. L.",
      venue: 'Geophys. Res. Lett., 40, 1021-1026',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.1002/grl.50234' }],
    },
    {
      year: 2012,
      title: 'Atmospheric ammonia and particulate inorganic nitrogen over the United States',
      authors:
        'Heald, C. L., Collett Jr., J. L., Lee, T., Benedict, K. B., Schwandner, F. M., Li, Y., Clarisse, L., Hurtmans, D. R., Van Damme, M., Clerbaux, C., Coheur, P.-F., Philip, S., Martin, R. V., and Pye, H. O. T.',
      venue: 'Atmos. Chem. Phys., 12, 10295-10312',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/acp-12-10295-2012' }],
    },
    {
      year: 2012,
      title: 'Simulation of nitrate, sulfate, and ammonium aerosols over the United States',
      authors: 'Walker, J. M., Philip, S., Martin, R. V., and Seinfeld, J. H.',
      venue: 'Atmos. Chem. Phys., 12, 11213-11227',
      type: 'Journal',
      links: [{ label: 'DOI', href: 'https://doi.org/10.5194/acp-12-11213-2012' }],
    },
  ] satisfies Publication[],

  presentations: [
    {
      title: 'Emerging Science, Technology, and Innovation Conclave (ESTIC) 2025',
      detail: 'Bharat Mandapam, New Delhi · November 3, 2025 (Participant as a Young S&T Leader)',
    },
    {
      title: "National Seminar, Dept. of Physics, St. Stephen's College",
      detail: 'Kerala · December 16, 2024 (Invited Lecture)',
    },
    {
      title:
        'Advances in satellite-based observations and chemical transport modeling to improve our understanding of surface air quality and climate',
      detail:
        'Anniversary General Meeting (89th), Indian National Science Academy (INSA), CSIR-NGRI, Hyderabad · December 6, 2023 (Oral Talk)',
    },
    {
      title: 'Improving Global Carbon Cycle Constraints with Satellite Based Retrievals',
      detail:
        'Atmospheric Science Interaction Meeting, Science Programme Office (SPO), ISRO Headquarters, Virtual · June 15, 2023 (Oral Talk)',
    },
    {
      title: 'Better understanding terrestrial biospheric carbon over South Asia using the OCO-2 satellite',
      detail:
        'National (Training) Workshop on Greenhouse Gases (GHG-3): Observations and Inverse Modeling on Indian Regional Perspective, IITM Pune, Virtual · December 14-17, 2021 (Plenary Talk, Panel Discussion)',
    },
    {
      title:
        "Better understanding biospheric carbon and its role in climate using NASA's Orbiting Carbon Observatory-2 (OCO-2) satellite",
      detail: 'NASA Ames Research Center Earth Science Division Seminar, Virtual · April 1, 2021 (Oral Talk)',
    },
    {
      title: 'OCO-2 Satellite-imposed Constraints on Terrestrial Biospheric CO2 Flux over South Asia',
      detail: 'OCO-2 Flux Inverse Team Teleconference, Virtual · January 26, 2021 (Oral Talk)',
    },
    {
      title:
        'How Well Satellite Remote Sensing Can Inform Surface Level Ozone Production Sensitivity to Precursor Trace Gas Emissions?',
      detail:
        "American Meteorological Society's 101st Annual Meeting and 23rd Conference on Atmospheric Chemistry, Virtual · January 11-15, 2021 (Oral Talk)",
    },
    {
      title: 'OCO-2 Satellite-imposed Constraints on Terrestrial Biospheric CO2 Flux over South Asia',
      detail: 'American Geophysical Union Fall Meeting 2020, Virtual · December 1-17, 2020 (Oral Talk)',
    },
    {
      title: 'CO2 Surface Flux Inversions using the OCO-2 Satellite Retrievals: Preliminary Results',
      detail:
        'NASA and USGS Joint Earth Science Poster Session, NASA Ames Research Center, Moffett Field, CA, U.S.A. · February 13, 2020 (Poster)',
    },
    {
      title: 'Orbiting Carbon Observatory (OCO) Satellite 2 and 3 (OCO-2 and OCO-3) Science Team Meeting',
      detail: 'Cocoa Beach, Florida, U.S.A. · April 24-27, 2019 (Attendee)',
    },
    {
      title: 'OCO-2 Satellite Flux Mini Meeting',
      detail:
        'Cooperative Institute for Research in Environmental Sciences, University of Colorado, Boulder, CO, U.S.A. · February 26-27, 2019 (Attendee)',
    },
    {
      title: 'Prior Biosphere Model Impact on Global Terrestrial CO2 Fluxes Estimated from OCO-2 Retrievals',
      detail: 'American Geophysical Union Fall Meeting 2018, Washington, D.C., U.S.A. · December 10-14, 2018 (Poster)',
    },
    {
      title: 'OCO-2 Science Team Meeting',
      detail: 'National Center for Atmospheric Research (NCAR), Boulder, CO, U.S.A. · October 23-24, 2018 (Attendee)',
    },
    {
      title: 'Impact of Prior Biosphere Models on Global NEE Estimates when Assimilating OCO-2 Retrievals',
      detail:
        'Front Range Carbon Cycle Researchers (FRACCRS) Meeting, Colorado State University, Fort Collins, CO, U.S.A. · August 27-28, 2018 (Talk)',
    },
    {
      title:
        'The impact of prior biosphere models on the estimate of global terrestrial CO2 fluxes by assimilating OCO-2 retrievals',
      detail: 'OCO-2 Science Team Meeting, California Institute of Technology, Pasadena, CA, U.S.A. · March 20-21, 2018 (Speed Talk)',
    },
    {
      title: 'Assessing the importance of prior biospheric fluxes on inverse model estimates of CO2',
      detail: 'American Geophysical Union Fall Meeting 2017, New Orleans, LA, U.S.A. · December 11-15, 2017 (Poster)',
    },
    {
      title: 'Assessing the importance of prior biospheric fluxes on inverse model estimates of CO2',
      detail:
        'OCO-2 Science Team Meeting, National Center for Atmospheric Research (NCAR), Boulder, CO, U.S.A. · October 25-27, 2017 (Poster)',
    },
    {
      title:
        'Evaluation of GEOS-Chem-simulated biospheric carbon dioxide fluxes and atmospheric concentrations using observations',
      detail: 'The 8th International GEOS-Chem Meeting, Harvard University, Cambridge, MA, U.S.A. · May 1-4, 2017 (Poster)',
    },
    {
      title: 'OCO-2 Science Team Meeting',
      detail: 'California Institute of Technology, Pasadena, CA, U.S.A. · March 21-23, 2017 (Attendee)',
    },
    {
      title: 'Evaluation of simulated biospheric carbon dioxide fluxes and atmospheric concentrations using observations',
      detail:
        'Earth Science Poster Session and Capabilities Fair, NASA Ames Research Center, Moffett Field, CA, U.S.A. · February 16, 2017 (AGU 2016 Poster)',
    },
    {
      title: 'Evaluation of simulated biospheric carbon dioxide fluxes and atmospheric concentrations using observations',
      detail: 'American Geophysical Union Fall Meeting 2016, San Francisco, CA, U.S.A. · December 12-16, 2016 (Poster)',
    },
    {
      title: 'Global Burden of Disease-Major Air Pollution Sources (GBD-MAPS) Working Group Meeting',
      detail:
        'IIT-Bombay, Mumbai, India (funded by Health Effects Institute, Boston) · January 18-19, 2016 (Attendee)',
    },
    {
      title:
        'Spatially and seasonally resolved estimate of the global organic matter to organic carbon ratio inferred from Aerosol Mass Spectrometer measurements and satellite-derived ground-level nitrogen dioxide concentrations',
      detail:
        'American Association for Aerosol Research (AAAR) 32nd Annual Conference, Portland, OR, U.S.A. · September 30-October 4, 2013 (Oral)',
    },
    {
      title: 'An approach to select optimal GEOS-Chem timesteps',
      detail: 'The 6th International GEOS-Chem Meeting, Harvard University, Cambridge, MA, U.S.A. · May 6-9, 2013 (Poster, May 8th)',
    },
    {
      title: 'Global OM/OC inferred from AMS measurements with GEOS-Chem and OMI NO2 concentrations',
      detail: 'The 6th International GEOS-Chem Meeting, Harvard University, Cambridge, MA, U.S.A. · May 6-9, 2013 (Oral, May 6th)',
    },
    {
      title:
        'Chemical composition and emission sources of South Asian fine particulate matter estimated from satellite observations and a chemical transport model',
      detail: 'American Geophysical Union Fall Meeting 2012, San Francisco, CA, U.S.A. · December 3-7, 2012 (Oral)',
    },
    {
      title: 'Meeting on Air Quality Data Assimilation and Fusion R and D',
      detail: 'Environment and Climate Change Canada, Toronto, ON, Canada · January 16-17, 2012 (Attendee)',
    },
    {
      title: 'Evaluation of GEOS mixed-layer depths and implications for GEOS-Chem aerosol simulations',
      detail: 'The 5th International GEOS-Chem Meeting, Harvard University, Cambridge, MA, U.S.A. · May 2-5, 2011 (Poster)',
    },
  ] satisfies PresentationEntry[],

  groupPresentations: [
    {
      authors: 'Singha Roy, E.',
      title: 'Gross primary production variations dominate the response of Indian terrestrial carbon fluxes to global climatic phenomena',
      detail: 'OCO-2/3 Science Team Telecon · 10 Feb 2026 (Online Talk)',
    },
    {
      authors: 'Singha Roy, E., Philip, S. et al.',
      title:
        'Examining the Drivers Leading to the Seasonality of OCO-2 Satellite Constrained Terrestrial Biospheric CO2 Fluxes over India',
      detail: 'AGU 2025 Conference, New Orleans, USA · 15-19 Dec 2025 (Poster)',
    },
    {
      authors: 'Singha Roy, E. and Philip, S.',
      title:
        'A Comprehensive Assessment of Terrestrial Biospheric Carbon Dioxide Fluxes in India with the OCO-2 Satellite Column Retrievals',
      detail: 'International Symposium on Tropical Meteorology (INTROMET 2025), IITM Pune, Pune, India · November 18-20, 2025 (Poster)',
    },
    {
      authors: 'Singha Roy, E., Philip, S. et al.',
      title: 'Impact of Global Climatic Phenomena on the Carbon Exchange Dynamics of the Indian Terrestrial Biosphere',
      detail: 'EGU General Assembly 2025, Vienna, Austria · 27 Apr-2 May 2025 (Poster)',
    },
    {
      authors: 'Ardra, D. and Philip, S.',
      title: 'Improving the surface NO2 estimates over India using satellite-retrievals and modeling',
      detail: 'International Symposium on Tropical Meteorology (INTROMET), Pune · November 2025 (Poster)',
    },
    {
      authors: 'Ardra, D. and Philip, S.',
      title: 'Improved surface NO2 estimates over India using satellite-retrievals and modeling',
      detail:
        "GEOS-Chem Europe Users' Meeting (GCE3), University College London, Bloomsbury, London, U.K. · August 18-20, 2025 (Oral Talk)",
    },
    {
      authors: 'Vazhathara, J. V., Kunchala, K. R., Philip, S., and Sharma, R.',
      title:
        'Estimation of the fossil fuel component in atmospheric CO2 based on radiocarbon measurements at a suburban site in the Indo-Gangetic Plain',
      detail: 'IGAC-iCACGP ECR 2025 Conference (Online Poster)',
    },
    {
      authors: 'Vazhathara, J. V., Kunchala, K. R., Philip, S., and Sharma, R.',
      title:
        'Deciphering the fossil fuel and biospheric components of atmospheric carbon dioxide using radiocarbon at a suburban site in the IGP',
      detail: 'INTROMET 2025 Conference, Pune, India · November 2025 (Poster)',
    },
    {
      authors: 'Gautam, D., Philip, S. et al.',
      title:
        'Assessing Ambient Formaldehyde Exposure and Estimating Cancer Risks over India using the Ozone Monitoring Instrument Satellite Sensor',
      detail: 'CSTEP ICAS 2025, Bengaluru · August 20-22, 2025 (Poster)',
    },
    {
      authors: 'Yadav, S., Kunchala, R. K., and Philip, S.',
      title:
        'Understanding the Temporal Evolution of Atmospheric Methane using real-time measurements at a suburban station over Northern India',
      detail: 'International Symposium on Tropical Meteorology (INTROMET-2025), Pune, Maharashtra · November 18-20, 2025 (Poster)',
    },
    {
      authors: 'Singha Roy, E., Philip, S. et al.',
      title:
        'Can Global Top-down Flux Inverse Models be Used to Confirm Whether the Indian Terrestrial Biosphere in Recent Years is a Carbon Sink?',
      detail:
        'American Geophysical Union Fall Meeting 2024, Washington, D.C., U.S.A. & Online · December 9-13, 2024 (Online Poster)',
    },
    {
      authors: 'Singha Roy, E. and Philip, S.',
      title:
        'Understanding the Indian land biospheric CO2 fluxes in the context of the OCO-2 Multi-model Intercomparison Project (OCO-2 MIP)',
      detail: 'Conference on Integrated Earth (CITE) 2024, IISER Pune · September 1-2, 2024 (Oral Talk)',
    },
    {
      authors: 'Saha, G. and Philip, S.',
      title: 'Assessment of GEOS-Chem Global Forward Model Simulated Atmospheric Nitrous Oxide (N2O) Concentrations over India',
      detail: 'Conference on Integrated Earth (CITE 2024), IISER Pune · September 1-2, 2024 (Poster)',
    },
    {
      authors: 'Ardra, D. and Philip, S.',
      title: 'Recent changes in satellite-derived PM2.5 over India',
      detail: 'IASTA National Aerosol Conference 2024, Dehradun, India · December 2024 (Poster)',
    },
    {
      authors: 'Ardra, D. and Philip, S.',
      title: 'Assessment of air pollution exposure over India using Satellite-based Multi-Pollutant Index',
      detail: 'iCACGP-IGAC 2024, Kuala Lumpur, Malaysia · September 2024 (Poster)',
    },
    {
      authors: 'Gautam, D. and Philip, S.',
      title:
        'Assessing Ambient Formaldehyde Exposure and Estimating Cancer Risks over India using the Ozone Monitoring Instrument Satellite Sensor',
      detail: 'Conference on Integrated Earth (CITE 2024), IISER Pune · September 1-2, 2024 (Poster)',
    },
    {
      authors: 'Yadav, S., Kunchala, R. K., and Philip, S.',
      title: 'Atmospheric methane (CH4) over India inferred from the TROPOMI satellite instrument',
      detail: 'National Symposium on Tropical Meteorology (TROPMET-2024), Rourkela, Odisha · December 10-12, 2024 (Poster)',
    },
    {
      authors: 'Vazhathara, J. V., Kunchala, K. R., Philip, S., Rathore, J., Ganguly, D., Gani, S., and Dey, S.',
      title: 'Temporal Evolution of Atmospheric Carbon Dioxide over a Suburban Station in the Indo-Gangetic Plain',
      detail:
        '16th International Commission on Atmospheric Chemistry and Global Pollution (iCACGP) Symposium and 18th International Global Atmospheric Chemistry (IGAC) Science Conference (iCACGP-IGAC 2024) (Poster)',
    },
    {
      authors: 'Singha Roy, E., Philip, S. et al.',
      title: 'Understanding the Indian land biospheric CO2 fluxes in the context of the OCO-2 Multi-model Intercomparison Project',
      detail:
        'American Geophysical Union Fall Meeting 2023, San Francisco, CA, U.S.A. & Online · December 11-15, 2023 (Online Poster)',
    },
    {
      authors: 'Singha Roy, E. and Philip, S.',
      title: 'Inferring Net Ecosystem Fluxes Over India using Satellite Data',
      detail: 'TROPMET 2023, Jaipur, Rajasthan · November 22-24, 2023 (Poster)',
    },
    {
      authors: 'Ardra, D. and Philip, S.',
      title: 'Assessment of the Satellite-based Multi-Pollutant Index Over India',
      detail: 'TROPMET 2023, Jaipur, Rajasthan · November 23, 2023 (Oral Talk)',
    },
    {
      authors: 'Vazhathara, J. V., Kunchala, K. R., and Philip, S.',
      title: 'Estimating the enhancement in fossil fuel carbon dioxide emissions over the Indo-Gangetic Plain',
      detail:
        'National Symposium "TROPMET-2023": Changing Dynamics of Arid Region and Impact on Weather and Climate over the Indian Subcontinent, Jaipur Chapter · November 22-24, 2023 (Poster)',
    },
  ] satisfies PresentationEntry[],

  highlights: [
    {
      title: 'A recent achievement, media mention, or milestone',
      date: '2026',
      description: 'One line on what happened and why it mattered.',
    },
    {
      title: 'Another highlight or piece of news',
      date: '2025',
    },
  ] satisfies HighlightItem[],

  groupOverview: [
    'Add two or three sentences here about the group: its mission, the questions it works on, and where it sits (department, centre, institute).',
    'Add a second paragraph on group culture, opportunities for students/collaborators, or what makes the group distinctive.',
  ],

  groupMeeting: [
    'Add the day, time, and location (or video link) for the regular group meeting.',
    'Add a note on format — e.g. rotating presenters, paper discussion, or progress updates.',
  ],

  seminars: [
    'Add details on the group or department seminar series: cadence, typical speakers, and how to find the schedule.',
    'Add a link or contact for suggesting speakers, if relevant.',
  ],

  faq: [
    {
      question: 'Do you have openings for Ph.D. students?',
      answer: 'Add your answer — application cycle, funding situation, and what you look for in applicants.',
    },
    {
      question: 'What background or coursework should I have before applying?',
      answer: 'Add your answer here.',
    },
    {
      question: 'Do I need to contact you before applying through the department?',
      answer: 'Add your answer here.',
    },
  ] satisfies FaqItem[],

  team: {
    phdScholars: [
      { name: 'Scholar Name One', role: 'Ph.D. Scholar, 2023 — Present' },
      { name: 'Scholar Name Two', role: 'Ph.D. Scholar, 2024 — Present' },
    ],
    alumni: [
      { name: 'Alumnus Name One', role: 'Ph.D. 2025 · now at Institution or Company' },
      { name: 'Alumnus Name Two', role: 'M.Tech 2024 · now at Institution or Company' },
    ],
  } satisfies { phdScholars: Person[]; alumni: Person[] },

  gallery: [
    { src: '/gallery/photo-1.jpg', caption: 'Caption — event, location, and year.' },
    { src: '/gallery/photo-2.jpg', caption: 'Caption — event, location, and year.' },
    { src: '/gallery/photo-3.jpg', caption: 'Caption — event, location, and year.' },
    { src: '/gallery/photo-4.jpg', caption: 'Caption — event, location, and year.' },
    { src: '/gallery/photo-5.jpg', caption: 'Caption — event, location, and year.' },
    { src: '/gallery/photo-6.jpg', caption: 'Caption — event, location, and year.' },
  ] satisfies GalleryItem[],
}

export type Profile = typeof profile

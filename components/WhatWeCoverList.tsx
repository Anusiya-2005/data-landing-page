'use client';

import React, { useState } from 'react';

export interface WhatWeCoverItem {
  id: string;
  title: string;
  desc: string;
  badge?: string;
  highlights: string[];
  formats: string[];
  models?: string[];
}

export interface WhatWeCoverData {
  sectionTitle: string;
  sectionHighlight: string;
  subtitle: string;
  items: WhatWeCoverItem[];
}

export const WHAT_WE_COVER_DATA: Record<string, WhatWeCoverData> = {
  'autonomous-vehicles': {
    sectionTitle: 'What we',
    sectionHighlight: 'cover',
    subtitle: 'Our AV annotation pipeline supports all major sensor modalities and annotation types required by Tier 1 autonomous vehicle programs.',
    items: [
      {
        id: 'bounding-boxes',
        title: 'Bounding Boxes & Cuboids',
        desc: 'Precise 2D and 3D tracking of vehicles, pedestrians, cyclists, motorcyclists, and moving obstacles across diverse road environments, intersections, and challenging weather. Supports KITTI, nuScenes, Waymo, and custom formats.',
        badge: '2D / 3D Sensor Ground Truth',
        highlights: [
          'Millimeter-precise 3D cuboid bounding with yaw, pitch, and roll',
          'Pedestrian, cyclist, vehicle, and micromobility classification',
          'Truncation & occlusion percentage attribute tagging',
          'Night, glare, rain, and snow adverse-weather handling',
        ],
        formats: ['KITTI', 'nuScenes', 'Waymo Open Dataset', 'COCO', 'YOLO v8/v9'],
        models: ['CenterPoint', 'PointPillars', 'YOLOv8', 'DETR 3D'],
      },
      {
        id: 'segmentation',
        title: 'Semantic & Instance Segmentation',
        desc: 'Pixel-perfect labeling of roads, lane markings, crosswalks, traffic signs, traffic lights, sidewalks, vegetation, and sky, delivering full scene understanding at every frame across day, night, and adverse weather conditions.',
        badge: 'Pixel-Level Scene Understanding',
        highlights: [
          'Drivable surface & free-space polygon delineation',
          'Solid, dashed, double, and colored lane spline tracing',
          'Traffic sign, signal light, and pavement symbol classification',
          'Individual obstacle instance segmentation in crowded scenes',
        ],
        formats: ['Cityscapes', 'ADE20K', 'COCO RLE', 'Polygon Coordinates', 'PNG Bitmasks'],
        models: ['SegFormer', 'Mask R-CNN', 'SAM', 'DeepLabV3+'],
      },
      {
        id: 'lidar-3d',
        title: 'LiDAR & 3D Point Cloud Annotation',
        desc: 'Fusing camera and LiDAR sensor data to build a precise spatial map of the 3D driving environment. We annotate 3D cuboids, ground plane segmentation, and drivable surface labels that power accurate depth perception and object localization.',
        badge: 'Spatial Depth & Sensor Fusion',
        highlights: [
          'Dense 3D point cloud bounding box annotation',
          'Camera-to-LiDAR multi-modal sensor fusion projection',
          'Ground plane segmentation and drivable slope mapping',
          'Multi-sweep aggregated LiDAR point cloud alignment',
        ],
        formats: ['PCD', 'LAS / LAZ', 'ROS Bag (.bag / .db3)', 'nuScenes LiDAR', 'Waymo 3D'],
        models: ['PointNet++', 'VoxelNet', 'SECOND', 'TransFusion'],
      },
      {
        id: 'video-tracking',
        title: 'Video Tracking & Trajectory Annotation',
        desc: 'Annotating object trajectories, motion vectors, and behavioral event sequences across video frame sequences, providing the temporal ground truth your perception and prediction models need to anticipate what other road users will do next.',
        badge: 'Motion Prediction & Event Tracking',
        highlights: [
          'Persistent object ID tracking across complex occlusions and re-entries',
          'Instantaneous velocity and heading vector calculations',
          'Cut-in, lane change, and emergency braking event flagging',
          'Pedestrian head pose, gaze orientation, and crossing intent tags',
        ],
        formats: ['MOT Challenge', 'Trajectory JSON / CSV', 'Frame-Synchronized HDF5'],
        models: ['DeepSORT', 'ByteTrack', 'Social-LSTM', 'Trajectron++'],
      },
    ],
  },

  'retail': {
    sectionTitle: 'What we',
    sectionHighlight: 'cover',
    subtitle: 'Complete retail data enrichment services from product taxonomy and visual intelligence to customer sentiment and personalization signals.',
    items: [
      {
        id: 'product-categorization',
        title: 'Product Categorization & Taxonomy Mapping',
        desc: 'Organizing millions of product listings into standardized, searchable category hierarchies mapped to Google Product Taxonomy, Amazon Browse Nodes, or your proprietary schema. We ensure consistent categorization across every seller and product type, eliminating the catalog chaos that degrades search performance and customer experience.',
        badge: 'Catalog Intelligence',
        highlights: [
          'Multi-tier category hierarchy tree mapping',
          'Cross-marketplace attribute normalization',
          'Duplicate catalog listing deduplication',
          'Multi-lingual product taxonomy classification',
        ],
        formats: ['Google Taxonomy XML', 'Amazon Browse Tree', 'Custom Schema JSON', 'CSV / Parquet'],
        models: ['BERT for E-commerce', 'RoBERTa', 'CatBoost'],
      },
      {
        id: 'visual-search',
        title: 'Visual Search Tagging',
        desc: 'Identifying and labeling items, colors, patterns, styles, materials, occasions, and brand attributes in product and lifestyle images, building the visual attribute layer that powers AI-driven visual search, outfit completion, and cross-sell recommendation systems.',
        badge: 'Visual AI Search',
        highlights: [
          'Color, pattern, neckline, sleeve, and silhouette tagging',
          'Material, texture, and style classification',
          'Multi-item bounding and polygon extraction in lifestyle photography',
          'Occasion, trend, and seasonal attribute labeling',
        ],
        formats: ['COCO Format', 'Polygon JSON', 'Normalized Vectors'],
        models: ['CLIP', 'Vision Transformer (ViT)', 'ResNet-50'],
      },
      {
        id: 'customer-review-sentiment',
        title: 'Customer Review Sentiment Analysis',
        desc: 'Extracting fine-grained, aspect-level sentiment from millions of shopper reviews covering product quality, sizing accuracy, packaging, delivery experience, and customer service. This labeled data powers competitive intelligence dashboards, quality monitoring systems, and NPS prediction models.',
        badge: 'Voice of Customer',
        highlights: [
          'Aspect-based sentiment analysis (ABSA)',
          'Sizing accuracy and fit feedback extraction',
          'Product flaw and defect complaint tagging',
          'Customer intent and churn risk scoring',
        ],
        formats: ['JSON Sentiment Schemas', 'BIO / Span Tagging', 'CSV / Parquet'],
        models: ['RoBERTa-Sentiment', 'Llama 3 Finetuned', 'BERT-ABSA'],
      },
      {
        id: 'personalized-recommendation',
        title: 'Personalized Recommendation Data',
        desc: 'Labeling user behavioral signals (dwell times, click paths, add-to-cart events, and purchase sequences) alongside product attribute enrichment, to train collaborative filtering and content-based recommendation models that drive measurable improvements in conversion rate and average order value.',
        badge: 'Personalization AI',
        highlights: [
          'User interaction sequence and dwell time labeling',
          'Frequently bought together and substitute pair validation',
          'Personal style profile and preference tagging',
          'Session-based intent classification',
        ],
        formats: ['Interaction Graph JSON', 'Matrix Format', 'Embeddings Vectors'],
        models: ['Two-Tower Recommenders', 'Graph Neural Networks', 'DeepFM'],
      },
    ],
  },

  'healthcare': {
    sectionTitle: 'What we',
    sectionHighlight: 'cover',
    subtitle: 'End-to-end healthcare data annotation from raw medical imaging to complex clinical text, built for compliant AI development.',
    items: [
      {
        id: 'medical-image',
        title: 'Medical Image Annotation',
        desc: 'Precise labeling of X-Rays, MRI, CT Scans, PET scans, ultrasound, and digital pathology slides. Our annotators apply region-of-interest masks, organ segmentations, lesion bounding boxes, and anatomical landmark annotations, validated by clinical experts to meet diagnostic-grade accuracy standards.',
        badge: 'Diagnostic Imaging',
        highlights: [
          'Lesion, nodule, and tumor bounding and polygon segmentation',
          'Multi-slice 3D volumetric organ segmentation (CT / MRI)',
          'Anatomical landmark and keypoint measurement',
          'Pathology cell counting and tissue classification',
        ],
        formats: ['DICOM', 'NIfTI (.nii / .nii.gz)', 'NRRD', 'JSON Masks'],
        models: ['UNet / UNet 3D', 'nnUNet', 'MedSAM'],
      },
      {
        id: 'clinical-nlp',
        title: 'Clinical NLP',
        desc: 'Extracting and structuring patient conditions, medications, dosages, procedures, lab results, and treatment plans from unstructured clinical notes, discharge summaries, and electronic health records, enabling your models to reason over free-text medical documentation with high precision.',
        badge: 'Clinical Ontologies',
        highlights: [
          'Medical Entity Recognition (Conditions, Medications, Procedures)',
          'ICD-10, SNOMED-CT, RxNorm, and LOINC concept mapping',
          'Temporal clinical timeline event extraction',
          'Dosage, frequency, and route of administration parsing',
        ],
        formats: ['FHIR JSON', 'BioC XML', 'CoNLL Format', 'Structured EHR'],
        models: ['BioBERT', 'ClinicalBERT', 'Med-PaLM 2'],
      },
      {
        id: 'genomics-labeling',
        title: 'Genomics Data Labeling',
        desc: 'Annotating complex genomic sequences, variant call files, and biological pathway data to support AI models in precision medicine, drug target identification, and next-generation sequencing analysis pipelines.',
        badge: 'Genomic AI',
        highlights: [
          'Single nucleotide polymorphism (SNP) variant annotation',
          'Exome and whole-genome sequencing feature tagging',
          'Gene-disease and biomarker association labeling',
          'Splice junction and promoter sequence boundary marking',
        ],
        formats: ['VCF (Variant Call Format)', 'BAM / SAM', 'FASTA / FASTQ'],
        models: ['DeepVariant', 'Enformer', 'DNABERT'],
      },
      {
        id: 'patient-data-deidentification',
        title: 'Patient Data De-identification',
        desc: 'Detecting and redacting all 18 HIPAA Safe Harbor identifiers (names, dates, geographic data, phone numbers, and more) from medical records, imaging metadata, and clinical notes, ensuring your AI training data is fully compliant for use.',
        badge: 'HIPAA & GDPR Compliant',
        highlights: [
          '18 HIPAA Safe Harbor identifier automated detection & redaction',
          'DICOM metadata and pixel-level burnt-in text anonymization',
          'GDPR and European Health Data Space compliance checks',
          'Full audit trails with cryptographically verifiable logs',
        ],
        formats: ['Sanitized DICOM', 'Redacted Text JSON', 'Masked PDF / TIFF'],
        models: ['NER Redaction Engines', 'SafeHarbor Auditing'],
      },
    ],
  },

  'finance': {
    sectionTitle: 'What we',
    sectionHighlight: 'cover',
    subtitle: 'Specialized financial data annotation from document extraction to fraud signals, covering every AI use case in modern banking and FinTech.',
    items: [
      {
        id: 'document-digitization',
        title: 'Document Digitization',
        desc: 'Extracting precise structured data from invoices, purchase orders, contracts, bank statements, tax forms, and financial reports. Our annotators identify key fields, table structures, and entity relationships, producing clean, structured output ready for downstream AI processing and ERP integration.',
        badge: 'Document Intelligence',
        highlights: [
          'Complex nested table and line-item extraction',
          'Key-value pair and multi-page contract clause parsing',
          'Multi-currency and localized date format normalization',
          'Confidence scoring and automated reconciliation checks',
        ],
        formats: ['Structured JSON', 'XML', 'XBRL Format', 'CSV / Excel'],
        models: ['LayoutLMv3', 'Donut', 'Nougat', 'DocLLM'],
      },
      {
        id: 'kyc-identity-verification',
        title: 'KYC & Identity Verification Data',
        desc: 'Annotating passports, national IDs, driver licenses, utility bills, and selfie-liveness pairs to train identity document classifiers, OCR extraction models, and biometric verification systems that power compliant digital onboarding and AML screening.',
        badge: 'Identity & AML Security',
        highlights: [
          'Global passport, national ID, and driver license field bounding',
          'MRZ and barcode validation and character extraction',
          'Face-match verification pair classification',
          '3D depth and selfie liveness spoofing detection labels',
        ],
        formats: ['Face Match Pairs JSON', 'Bbox Document JSON', 'Crop Images / Masks'],
        models: ['ArcFace', 'InsightFace', 'PaddleOCR'],
      },
      {
        id: 'financial-sentiment',
        title: 'Financial Sentiment Analysis',
        desc: 'Tagging earnings call transcripts, analyst research notes, market news articles, regulatory filings, and financial social media with fine-grained directional and aspect-level sentiment signals that power alpha generation, risk monitoring, and investor intelligence platforms.',
        badge: 'Alpha Intelligence',
        highlights: [
          'Earnings call transcript section & Q&A sentiment scoring',
          'Guidance change, revenue risk, and macro factor tagging',
          'Financial entity linking (tickers, executives, competitors)',
          'Regulatory filing risk factor and disclosure analysis',
        ],
        formats: ['Directional Alpha JSON', 'Ticker-Linked Datasets', 'Parquet / CSV'],
        models: ['FinBERT', 'BloombergGPT', 'RoBERTa-Financial'],
      },
      {
        id: 'fraud-detection',
        title: 'Fraud Detection Data Labeling',
        desc: 'Categorizing transactional anomalies, account takeover behavioral patterns, synthetic identity signals, and card-not-present fraud indicators, building the richly labeled ground truth datasets that train real-time fraud detection and risk scoring models.',
        badge: 'Fraud Prevention',
        highlights: [
          'Transactional anomaly and out-of-pattern spending classification',
          'Account takeover (ATO) login velocity sequence tagging',
          'Synthetic identity creation graph indicators',
          'Chargeback and card-not-present (CNP) fraud pattern labeling',
        ],
        formats: ['Graph Edge / Node JSON', 'Event Log Datasets', 'Tabular Parquet'],
        models: ['XGBoost / LightGBM', 'Graph Convolutional Networks'],
      },
    ],
  },
};

interface WhatWeCoverListProps {
  industry: 'autonomous-vehicles' | 'retail' | 'healthcare' | 'finance';
}

export default function WhatWeCoverList({ industry }: WhatWeCoverListProps) {
  const data = WHAT_WE_COVER_DATA[industry] || WHAT_WE_COVER_DATA['autonomous-vehicles'];
  // Active popped-up item id
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section what-we-cover-section">
      <div className="container">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ color: 'var(--navy)', fontSize: '1.9rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.03em' }}>
            {data.sectionTitle} <span className="gradient-text">{data.sectionHighlight}</span>
          </h2>
          <p style={{ color: 'var(--muted)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.6 }}>{data.subtitle}</p>

          {/* The list with dividing lines, where each item can pop out */}
          <ul className="cover-popout-list">
            {data.items.map((item) => {
              const isPopped = activeId === item.id;

              return (
                <li
                  key={item.id}
                  className={`cover-popout-item ${isPopped ? 'is-popped' : ''}`}
                  onClick={() => toggleItem(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleItem(item.id);
                    }
                  }}
                  aria-expanded={isPopped}
                  title="Click to toggle details"
                >
                  <div className="cover-popout-header">
                    <span className="cover-popout-tick">
                      <svg className="icon" aria-hidden="true" viewBox="0 0 24 24" width={isPopped ? 16 : 14} height={isPopped ? 16 : 14} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>

                    <div className="cover-popout-text">
                      <div className="cover-popout-title-row">
                        <strong className="cover-popout-title">{item.title}</strong>
                        {item.badge && isPopped && (
                          <span className="cover-popout-badge">{item.badge}</span>
                        )}
                      </div>

                      <span className="cover-popout-lead">{item.desc}</span>
                    </div>
                  </div>

                  {/* Popped up highlighted details panel */}
                  {isPopped && (
                    <div className="cover-popout-details" onClick={(e) => e.stopPropagation()}>
                      <div className="cover-popout-divider"></div>

                      <div className="cover-popout-grid">
                        <div className="cover-popout-col">
                          <h4 className="cover-popout-subhead">
                            <span className="subhead-dot"></span>
                            Key Capabilities &amp; Verification
                          </h4>
                          <ul className="cover-popout-sublist">
                            {item.highlights.map((h, i) => (
                              <li key={i}>
                                <span className="sub-tick">✓</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="cover-popout-col">
                          <h4 className="cover-popout-subhead">
                            <span className="subhead-dot"></span>
                            Supported Data Formats
                          </h4>
                          <div className="cover-popout-chips">
                            {item.formats.map((fmt, i) => (
                              <span key={i} className="popout-chip">{fmt}</span>
                            ))}
                          </div>

                          {item.models && item.models.length > 0 && (
                            <>
                              <h4 className="cover-popout-subhead" style={{ marginTop: '14px' }}>
                                <span className="subhead-dot"></span>
                                Target Model Architectures
                              </h4>
                              <div className="cover-popout-chips">
                                {item.models.map((mod, i) => (
                                  <span key={i} className="popout-chip model">{mod}</span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="cover-popout-bottom-bar">
                        <span className="cover-popout-assurance">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                          99.4%+ Accuracy Benchmark • Dual-Pass Review
                        </span>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export const id = 209;
export const ids = [209];
export const modules = {
  41913: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      loadGlbAsset: () => zb,
      loadGlbTree: () => rb
    });
    var wG = ZG(38311),
      SG = ZG(41918),
      LG = ZG(36579),
      yG = ZG.n(LG);

    function kG() {
      return yG()('(()=>{class GG extends Error{}function bG(bG,ZG){const wG=bG._malloc(ZG);if(0===wG)throw new GG(`Draco: the decoder\'s heap refused ${ZG} bytes`);return wG}function ZG(GG){return{[GG.DT_FLOAT32]:[Float32Array,5126],[GG.DT_INT8]:[Int8Array,5120],[GG.DT_INT16]:[Int16Array,5122],[GG.DT_INT32]:[Int32Array,5124],[GG.DT_UINT8]:[Uint8Array,5121],[GG.DT_UINT16]:[Uint16Array,5123],[GG.DT_UINT32]:[Uint32Array,5125]}}function wG(bG,wG,SG,LG,yG){let kG=null,UG=null,YG=null;try{kG=new bG.Decoder,UG=new bG.DecoderBuffer,UG.Init(wG,wG.byteLength);let VG=0;const pG=kG.GetEncodedGeometryType(UG);if(pG===bG.TRIANGULAR_MESH){const ZG=new bG.Mesh;YG=ZG;const wG=kG.DecodeBufferToMesh(UG,ZG);if(!wG.ok()||0===ZG.ptr)throw new GG(wG.error_msg());VG=3*ZG.num_faces()}else{if(pG!==bG.POINT_CLOUD)throw new GG(`Draco: Cannot decode invalid geometry type ${pG}`);{const ZG=new bG.PointCloud;YG=ZG;const wG=kG.DecodeBufferToPointCloud(UG,ZG);if(!wG.ok()||!ZG.ptr)throw new GG(wG.error_msg())}}const fG=YG.num_points();if(fG!==LG.vertices||VG!==LG.indices)throw new GG(`Draco: decoded ${fG} vertices and ${VG} indices, the accessors declare ${LG.vertices} and ${LG.indices}`);const QG=ZG(bG),KG=[];for(const{kind:bG,id:ZG,components:wG}of SG){const SG=kG.GetAttributeByUniqueId(YG,ZG);if(!SG||0===SG.ptr)throw new GG(`Draco: no attribute with id ${ZG} (${bG})`);const LG=SG.data_type();if(!QG[LG])throw new GG(`Draco: Cannot decode invalid data type ${LG}`);if(SG.num_components()!==wG)throw new GG(`Draco: ${bG} decodes to ${SG.num_components()} components, its accessor declares ${wG}`);KG.push([bG,SG,LG])}return yG({dracoDecoder:kG,geometry:YG,triangles:pG===bG.TRIANGULAR_MESH,numPoints:fG,numIndices:VG,attributes:KG})}finally{YG&&bG.destroy(YG),UG&&bG.destroy(UG),kG&&bG.destroy(kG)}}const SG=self;let LG=null;self.onmessage=GG=>{let{data:yG}=GG;if("init"===yG.id){try{importScripts(yG.url),LG=DracoDecoderModule({wasmBinary:yG.wasmBinary}),SG.postMessage({id:"initDone"})}catch(pG){SG.postMessage({id:"initError",message:pG instanceof Error?pG.message:String(pG)})}return}const{seq:kG,data:UG,attributeIds:YG,expected:VG}=yG;LG?LG.then((GG=>{try{const LG=function(GG,SG,LG,yG){const kG=Object.keys(LG).map((GG=>({kind:GG,id:LG[GG],components:yG.components[GG]})));return wG(GG,SG,kG,yG,(wG=>{let{dracoDecoder:SG,geometry:LG,triangles:yG,numPoints:kG,numIndices:UG,attributes:YG}=wG;const VG=ZG(GG);let pG=null;if(yG){const ZG=4*UG,wG=bG(GG,ZG);try{SG.GetTrianglesUInt32Array(LG,ZG,wG),pG=new Uint32Array(UG),pG.set(new Uint32Array(GG.HEAPF32.buffer,wG,UG))}finally{GG._free(wG)}}const fG=[];for(const[ZG,QG,KG]of YG){const[wG]=VG[KG],yG=QG.num_components(),UG=kG*yG,YG=UG*wG.BYTES_PER_ELEMENT,pG=bG(GG,YG);try{SG.GetAttributeDataArrayForAllPoints(LG,QG,KG,YG,pG),fG.push({kind:ZG,data:new wG(GG.HEAPF32.buffer,pG,UG).slice(),size:yG,byteOffset:QG.byte_offset(),byteStride:QG.byte_stride(),normalized:QG.normalized()})}finally{GG._free(pG)}}return{indices:pG,attributes:fG,totalVertices:kG}}))}(GG,UG,YG,VG),yG=LG.attributes.map((GG=>GG.data.buffer));LG.indices&&yG.push(LG.indices.buffer),SG.postMessage({id:"decoded",seq:kG,...LG},yG)}catch(pG){SG.postMessage({id:"decodeError",seq:kG,message:pG instanceof Error?pG.message:String(pG)})}}),(GG=>{SG.postMessage({id:"decodeError",seq:kG,message:GG instanceof Error?GG.message:String(GG)})})):SG.postMessage({id:"decodeError",seq:kG,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, ZG.p + "dracoDecode.worker.6469c408.worker.js")
    }
    var UG = ZG(80);
    const YG = 1e3;
    let VG = null,
      pG = null;
    const fG = [],
      QG = [];
    let KG = 0;
    const hG = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      dG = function(GG, bG) {
        const ZG = GG ? Math.max(1, Math.min(Math.floor(.5 * GG), 4)) : 1;
        return bG ? Math.min(ZG, 2) : ZG
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, UG.isMobile)());

    function JG() {
      if (!VG) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: GG,
        wasmBinaryUrl: bG
      } = VG;
      return pG ??= fetch(bG).then((GG => {
        if (!GG.ok) throw new Error(`Draco: fetching ${bG} failed: ${GG.status}`);
        return GG.arrayBuffer()
      })), pG.catch((() => {
        pG = null
      })), hG.workersStarted++, pG.then((bG => new Promise(((ZG, wG) => {
        const SG = new kG;
        SG.onerror = GG => {
          SG.onmessage = null, SG.onerror = null, SG.terminate(), wG(new Error("Draco: the decode worker failed to start" + (GG.message ? `: ${GG.message}` : " (its script did not load)")))
        }, SG.onmessage = GG => {
          let {
            data: bG
          } = GG;
          SG.onmessage = null, SG.onerror = null, "initDone" === bG.id ? ZG(SG) : (SG.terminate(), wG(new Error(`Draco: ${"initError"===bG.id?bG.message:"the worker did not start"}`)))
        };
        const LG = bG.slice(0),
          yG = {
            id: "init",
            url: GG,
            wasmBinary: LG
          };
        SG.postMessage(yG, [LG])
      }))))
    }

    function rG(GG) {
      const bG = fG.indexOf(GG); - 1 !== bG && fG.splice(bG, 1);
      const ZG = QG.shift();
      ZG && EG(ZG)
    }

    function zG(GG, bG) {
      GG.busy = !0, GG.releaseTimer && (clearTimeout(GG.releaseTimer), GG.releaseTimer = null);
      GG.worker.then((ZG => {
        const wG = KG++;
        ZG.onmessage = SG => {
          let {
            data: LG
          } = SG;
          if (("decoded" === LG.id || "decodeError" === LG.id) && LG.seq === wG) {
            if (ZG.onmessage = null, ZG.onerror = null, "decoded" === LG.id) return hG.decodes++, bG.resolve({
              indices: LG.indices,
              attributes: LG.attributes,
              totalVertices: LG.totalVertices
            }), void(() => {
              const bG = QG.shift();
              bG ? zG(GG, bG) : (GG.busy = !1, GG.releaseTimer = setTimeout((() => {
                const bG = fG.indexOf(GG); - 1 !== bG && fG.splice(bG, 1), GG.worker.then((GG => {
                  GG.terminate()
                }))
              }), YG))
            })();
            ZG.terminate(), bG.reject(new Error(LG.message)), rG(GG)
          }
        }, ZG.onerror = wG => {
          ZG.onmessage = null, ZG.onerror = null, ZG.terminate(), bG.reject(new Error(`Draco: the decode worker failed: ${wG.message}`)), rG(GG)
        };
        const SG = {
          id: "decode",
          seq: wG,
          data: bG.data,
          attributeIds: bG.attributeIds,
          expected: bG.expected
        };
        ZG.postMessage(SG, [bG.data.buffer])
      }), (ZG => {
        bG.reject(ZG instanceof Error ? ZG : new Error(String(ZG))), rG(GG)
      }))
    }

    function EG(GG) {
      const bG = fG.find((GG => !GG.busy));
      if (bG) zG(bG, GG);
      else {
        if (fG.length < dG) {
          const bG = {
            worker: JG(),
            busy: !0,
            releaseTimer: null
          };
          return fG.push(bG), hG.mostWorkers = Math.max(hG.mostWorkers, fG.length), void zG(bG, GG)
        }
        QG.push(GG)
      }
    }

    function oG(GG, bG, ZG) {
      return new Promise(((wG, SG) => {
        EG({
          data: new Int8Array(GG.buffer, GG.byteOffset, GG.byteLength).slice(),
          attributeIds: bG,
          expected: ZG,
          resolve: wG,
          reject: SG
        })
      }))
    }
    var XG = ZG(37835),
      uG = ZG(37845),
      iG = ZG(34560),
      CG = ZG(34555);
    const WG = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function mG(GG) {
      const bG = (0, CG.f)(GG.byteLength);
      if (bG) throw new iG.n(bG);
      const {
        json: ZG,
        bin: wG
      } = (0, iG.w)(GG), SG = (0, CG.d)(ZG, wG);
      if (SG) throw new iG.n(SG);
      try {
        return function(GG, bG) {
          var ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG;
          const JG = new Map,
            rG = ZG => {
              let wG = JG.get(ZG);
              if (!wG) {
                var SG;
                const LG = GG.bufferViews[ZG],
                  yG = null !== (SG = LG.byteOffset) && void 0 !== SG ? SG : 0;
                wG = {
                  index: ZG,
                  bytes: bG.subarray(yG, yG + LG.byteLength),
                  byteStride: LG.byteStride
                }, JG.set(ZG, wG)
              }
              return wG
            },
            zG = new Map,
            EG = bG => {
              let ZG = zG.get(bG);
              if (!ZG) {
                var wG;
                const SG = GG.accessors[bG];
                ZG = {
                  index: bG,
                  count: SG.count,
                  type: SG.type,
                  numComponents: iG.r[SG.type],
                  componentType: SG.componentType,
                  normalized: null !== (wG = SG.normalized) && void 0 !== wG && wG,
                  byteOffset: SG.byteOffset,
                  bufferView: void 0 === SG.bufferView ? null : rG(SG.bufferView),
                  min: SG.min,
                  max: SG.max
                }, zG.set(bG, ZG)
              }
              return ZG
            },
            oG = null !== (ZG = null === (wG = GG.extensionsUsed) || void 0 === wG ? void 0 : wG.includes("KHR_draco_mesh_compression")) && void 0 !== ZG && ZG,
            XG = (null !== (SG = GG.meshes) && void 0 !== SG ? SG : []).map(((bG, ZG) => {
              const wG = bG.primitives.map(((bG, ZG) => {
                var wG, SG, LG;
                const yG = oG ? null === (wG = bG.extensions) || void 0 === wG ? void 0 : wG.KHR_draco_mesh_compression : void 0;
                let kG = null;
                const UG = [];
                if (yG) {
                  const ZG = {
                    vertices: GG.accessors[bG.attributes.POSITION].count,
                    indices: void 0 === bG.indices ? 0 : GG.accessors[bG.indices].count,
                    components: {}
                  };
                  kG = {
                    bufferView: rG(yG.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: ZG
                  };
                  for (const [wG, SG] of iG.i) {
                    const LG = yG.attributes[wG];
                    if (void 0 === LG) continue;
                    kG.attributeIds[SG] = LG;
                    const UG = bG.attributes[wG];
                    var YG;
                    if (void 0 !== UG) kG.normalized[SG] = null !== (YG = GG.accessors[UG].normalized) && void 0 !== YG && YG, ZG.components[SG] = iG.r[GG.accessors[UG].type]
                  }
                } else
                  for (const [GG, VG] of iG.i) {
                    const ZG = bG.attributes[GG];
                    void 0 !== ZG && UG.push({
                      semantic: GG,
                      kind: VG,
                      accessor: EG(ZG)
                    })
                  }
                return {
                  index: ZG,
                  mode: null !== (SG = bG.mode) && void 0 !== SG ? SG : 4,
                  attributes: UG,
                  indices: yG || void 0 === bG.indices ? null : EG(bG.indices),
                  position: void 0 === bG.attributes.POSITION ? null : EG(bG.attributes.POSITION),
                  material: null !== (LG = bG.material) && void 0 !== LG ? LG : null,
                  draco: kG
                }
              }));
              return {
                index: ZG,
                name: bG.name,
                primitives: wG,
                extras: bG.extras
              }
            })),
            uG = (null !== (LG = GG.nodes) && void 0 !== LG ? LG : []).map(((GG, bG) => {
              var ZG, wG;
              return {
                index: bG,
                name: GG.name,
                children: null !== (ZG = GG.children) && void 0 !== ZG ? ZG : [],
                mesh: null !== (wG = GG.mesh) && void 0 !== wG ? wG : null,
                translation: GG.translation,
                rotation: GG.rotation,
                scale: GG.scale,
                hasCamera: void 0 !== GG.camera,
                extras: GG.extras
              }
            })),
            CG = null !== (yG = null === (kG = GG.extensionsUsed) || void 0 === kG ? void 0 : kG.includes("KHR_materials_unlit")) && void 0 !== yG && yG,
            mG = null !== (UG = null === (YG = GG.extensionsUsed) || void 0 === YG ? void 0 : YG.includes("KHR_texture_transform")) && void 0 !== UG && UG,
            IG = (null !== (VG = GG.materials) && void 0 !== VG ? VG : []).map(((GG, bG) => {
              var ZG, wG, SG, LG;
              const yG = GG.pbrMetallicRoughness,
                kG = null === yG || void 0 === yG ? void 0 : yG.baseColorTexture;
              return {
                index: bG,
                name: GG.name,
                extras: GG.extras,
                unlit: CG && void 0 !== (null === (ZG = GG.extensions) || void 0 === ZG ? void 0 : ZG.KHR_materials_unlit),
                pbr: yG ? {
                  baseColorFactor: yG.baseColorFactor,
                  metallicFactor: yG.metallicFactor,
                  roughnessFactor: yG.roughnessFactor
                } : null,
                baseColorTexture: kG ? {
                  texture: kG.index,
                  transform: mG && (null === (wG = kG.extensions) || void 0 === wG ? void 0 : wG.KHR_texture_transform) || null
                } : null,
                emissiveFactor: GG.emissiveFactor,
                alphaMode: null !== (SG = GG.alphaMode) && void 0 !== SG ? SG : "OPAQUE",
                alphaCutoff: GG.alphaCutoff,
                doubleSided: null !== (LG = GG.doubleSided) && void 0 !== LG && LG
              }
            })),
            FG = (null !== (pG = GG.textures) && void 0 !== pG ? pG : []).map(((bG, ZG) => {
              var wG, SG;
              const LG = void 0 === bG.sampler ? WG : {
                index: bG.sampler,
                ...null === (wG = GG.samplers) || void 0 === wG ? void 0 : wG[bG.sampler]
              };
              return {
                index: ZG,
                sampler: {
                  index: LG.index,
                  magFilter: LG.magFilter,
                  minFilter: LG.minFilter,
                  wrapS: LG.wrapS,
                  wrapT: LG.wrapT
                },
                image: null !== (SG = bG.source) && void 0 !== SG ? SG : -1
              }
            })),
            vG = (null !== (fG = GG.images) && void 0 !== fG ? fG : []).map(((GG, bG) => ({
              index: bG,
              name: GG.name,
              mimeType: GG.mimeType,
              bufferView: rG(GG.bufferView)
            }))),
            aG = null !== (QG = (0, iG.v)(GG)) && void 0 !== QG ? QG : 0;
          return {
            json: GG,
            rootNodes: null !== (KG = null === (hG = GG.scenes) || void 0 === hG || null === (dG = hG[aG]) || void 0 === dG ? void 0 : dG.nodes) && void 0 !== KG ? KG : [],
            nodes: uG,
            meshes: XG,
            materials: IG,
            textures: FG,
            images: vG
          }
        }(ZG, wG)
      } catch (LG) {
        throw LG instanceof iG.k ? LG : new iG.k(`reading the GLB failed: ${LG instanceof Error?LG.message:String(LG)}`)
      }
    }
    async function IG(GG, bG) {
      var ZG, wG;
      const SG = GG.draco;
      if (!SG) throw new iG.k("not a Draco primitive");
      let LG;
      try {
        LG = await bG(SG.bufferView.bytes, SG.attributeIds, SG.expected)
      } catch (YG) {
        throw new iG.k(`Draco decoding failed: ${YG instanceof Error?YG.message:String(YG)}`)
      }
      const {
        vertices: yG,
        indices: kG,
        components: UG
      } = SG.expected;
      if (LG.totalVertices !== yG || (null !== (ZG = null === (wG = LG.indices) || void 0 === wG ? void 0 : wG.length) && void 0 !== ZG ? ZG : 0) !== kG || LG.attributes.some((GG => GG.size !== UG[GG.kind] || GG.data.length !== yG * GG.size))) throw new iG.k("Draco decoding gave other counts than the accessors declare");
      for (const VG of LG.attributes) {
        const GG = SG.normalized[VG.kind];
        void 0 !== GG && (VG.normalized = GG)
      }
      return LG
    }
    const FG = new WeakMap;

    function vG(GG, bG) {
      var ZG;
      const wG = null !== (ZG = FG.get(GG)) && void 0 !== ZG ? ZG : bG(GG);
      return FG.set(GG, wG), wG
    }

    function aG(GG) {
      const bG = GG.bufferView,
        ZG = 5125 === GG.componentType ? Uint32Array : Uint16Array,
        wG = bG.bytes.buffer,
        SG = bG.bytes.byteOffset + (GG.byteOffset || 0);
      return SG % ZG.BYTES_PER_ELEMENT !== 0 ? new ZG(wG.slice(SG, SG + GG.count * ZG.BYTES_PER_ELEMENT), 0) : new ZG(wG, SG, GG.count)
    }

    function cG(GG, bG) {
      if (GG.min && GG.max) return [new Float64Array(GG.min), new Float64Array(GG.max)];
      const ZG = bG.find((GG => {
          let {
            kind: bG
          } = GG;
          return "position" === bG
        })),
        wG = ZG ? (0, uG.j)(ZG, GG.count) : new Float32Array(0);
      return (0, uG.s)(wG.length / 3, ((GG, bG) => wG[3 * GG + bG]))
    }

    function lG(GG) {
      const bG = GG.attributes.map((GG => {
          var bG, ZG;
          let {
            kind: wG,
            accessor: SG
          } = GG;
          const {
            bufferView: LG,
            numComponents: yG
          } = SG;
          if (!LG) {
            return {
              kind: wG,
              data: vG(SG, (() => new Float32Array(yG * SG.count))),
              offset: 0,
              stride: 4 * yG,
              components: yG,
              glType: 5126,
              isNormalized: !1
            }
          }
          const kG = null !== (bG = LG.byteStride) && void 0 !== bG ? bG : yG * iG.e[SG.componentType];
          return {
            kind: wG,
            data: LG.bytes,
            offset: null !== (ZG = SG.byteOffset) && void 0 !== ZG ? ZG : 0,
            stride: kG,
            components: yG,
            glType: SG.componentType,
            isNormalized: SG.normalized
          }
        })),
        ZG = GG.indices,
        wG = ZG && vG(ZG, aG),
        SG = GG.position;
      return new uG.f(bG, wG, SG.count, ...cG(SG, bG))
    }
    const jG = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function PG(GG, bG) {
      const ZG = bG.attributes.map((GG => {
        let {
          kind: bG,
          data: ZG,
          size: wG,
          byteOffset: SG,
          byteStride: LG,
          normalized: yG
        } = GG;
        return {
          kind: bG,
          data: ZG,
          offset: SG,
          stride: LG,
          components: wG,
          glType: 5120 + jG.indexOf(ZG.constructor),
          isNormalized: yG
        }
      }));
      return new uG.f(ZG, bG.indices, bG.totalVertices, ...cG(GG.position, ZG))
    }

    function MG(GG) {
      const bG = GG.lastIndexOf("/");
      return bG < 0 ? GG : GG.substring(bG + 1)
    }

    function AG(GG) {
      const bG = GG.lastIndexOf("/");
      return bG < 0 ? "" : GG.substring(0, bG + 1)
    }

    function sG(GG) {
      return GG.name || `node${GG.index}`
    }
    const qG = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      nG = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      gG = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function eG(GG) {
      var bG, ZG, wG, SG;
      const LG = null !== (bG = GG.minFilter) && void 0 !== bG ? bG : 9987;
      return 9729 === (null !== (ZG = GG.magFilter) && void 0 !== ZG ? ZG : 9729) ? null !== (wG = nG[LG]) && void 0 !== wG ? wG : 3 : null !== (SG = gG[LG]) && void 0 !== SG ? SG : 4
    }
    const RG = {
      33071: 0,
      33648: 2
    };

    function TG(GG) {
      var bG;
      return null !== (bG = RG[null !== GG && void 0 !== GG ? GG : 10497]) && void 0 !== bG ? bG : 1
    }

    function HG(GG) {
      return 9728 === GG.minFilter || 9729 === GG.minFilter
    }

    function tG(GG) {
      var bG, ZG, wG;
      const SG = Float64Array.from(null !== (bG = GG.scale) && void 0 !== bG ? bG : [1, 1, 1]);
      return GG.hasCamera && (SG[0] = -1), {
        translation: Float64Array.from(null !== (ZG = GG.translation) && void 0 !== ZG ? ZG : [0, 0, 0]),
        rotation: Float64Array.from(null !== (wG = GG.rotation) && void 0 !== wG ? wG : [0, 0, 0, 1]),
        scale: SG
      }
    }

    function DG(GG, bG) {
      let {
        translation: ZG,
        rotation: wG,
        scale: SG
      } = GG;
      const LG = new Float32Array(16);
      return (0, XG.d)(SG, 0, wG, 0, ZG, 0, LG), bG && (0, XG.n)(LG, bG, 0, LG), LG
    }
    class NG {
      constructor(GG, bG, ZG, wG) {
        this.model = GG, this.decode = bG, this.fileInfo = ZG, this.uniqueRootUrl = wG, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const SG = new Set,
          LG = (bG, ZG) => {
            const wG = GG.nodes[bG];
            if (this.parents.has(wG)) throw new iG.k(`/nodes/${bG}: Invalid recursive node hierarchy`);
            this.parents.set(wG, ZG);
            const yG = null === wG.mesh ? [] : GG.meshes[wG.mesh].primitives,
              kG = yG.map((GG => {
                const bG = yG.length > 1;
                return {
                  name: bG ? `${sG(wG)}_primitive${GG.index}` : sG(wG),
                  node: wG,
                  primitive: GG,
                  part: bG,
                  geometry: null
                }
              }));
            this.uses.set(wG, kG);
            const UG = null !== wG.mesh && SG.has(wG.mesh);
            SG.add(wG.mesh), this.own.set(wG, UG ? [] : kG);
            for (const GG of wG.children) LG(GG, wG)
          };
        for (const yG of GG.rootNodes) LG(yG, null);
        this.primitives = GG.nodes.flatMap((GG => {
          var bG;
          return null !== (bG = this.own.get(GG)) && void 0 !== bG ? bG : []
        }))
      }
      decodeGeometries() {
        const GG = new Map;
        return Promise.all(this.primitives.map((async bG => {
          const {
            primitive: ZG
          } = bG, wG = ZG.draco;
          let SG = wG ? GG.get(wG.bufferView.index) : Promise.resolve(lG(ZG));
          SG || (SG = IG(ZG, this.decode).then((GG => PG(ZG, GG))), GG.set(wG.bufferView.index, SG)), bG.geometry = await SG
        })))
      }
      parentOf(GG) {
        var bG;
        return null !== (bG = this.parents.get(GG)) && void 0 !== bG ? bG : null
      }
      meshesUnder(GG) {
        const bG = this.model.nodes.filter((GG => this.uses.has(GG)));
        for (const wG of bG) {
          const bG = this.uses.get(wG),
            ZG = bG.find((bG => bG.name === GG));
          if (ZG) return 1 === bG.length ? this.subtree(wG) : this.own.get(wG).includes(ZG) ? [ZG] : []
        }
        const ZG = bG.find((bG => 1 !== this.uses.get(bG).length && sG(bG) === GG));
        return ZG ? this.subtree(ZG) : null
      }
      subtree(GG) {
        return [...this.own.get(GG), ...GG.children.flatMap((GG => this.subtree(this.model.nodes[GG])))]
      }
      worldMatrix(GG, bG, ZG) {
        let wG = DG(tG(bG ? qG : {}), null);
        const SG = [];
        for (let yG = GG.part ? GG.node : this.parentOf(GG.node); yG; yG = this.parentOf(yG)) SG.unshift(yG);
        for (const yG of SG) wG = DG(tG(yG), wG);
        const LG = tG(GG.part ? {} : GG.node);
        return void 0 !== ZG && LG.scale.fill(ZG), DG(LG, wG)
      }
      floats(GG) {
        const {
          vertexAttributes: bG,
          vertexCount: ZG
        } = GG.geometry;
        return new Map(bG.map((GG => [GG.kind, (0, uG.j)(GG, ZG)])))
      }
      imageUrl(GG) {
        return function(GG, bG, ZG) {
          let {
            name: wG
          } = bG;
          return `data:${GG}${wG}#image${ZG}`
        }(this.uniqueRootUrl, this.fileInfo, GG)
      }
      textureDesc(GG, bG) {
        var ZG;
        let {
          texture: wG,
          transform: SG
        } = GG;
        const {
          sampler: LG,
          image: yG
        } = this.model.textures[wG], {
          bufferView: kG,
          mimeType: UG,
          name: YG
        } = this.model.images[yG], VG = SG && {
          ...SG.offset ? {
            uOffset: SG.offset[0],
            vOffset: SG.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...SG.rotation ? {
            wAng: -SG.rotation
          } : {},
          ...SG.scale ? {
            uScale: SG.scale[0],
            vScale: SG.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(yG),
          noMipmap: HG(LG),
          invertY: !1,
          samplingMode: eG(LG),
          data: {
            bytes: kG.bytes,
            mimeType: UG,
            label: YG,
            context: `/textures/${wG}`
          },
          sets: {
            wrapU: TG(LG.wrapS),
            wrapV: TG(LG.wrapT),
            ...VG,
            coordinatesIndex: null !== (ZG = null === SG || void 0 === SG ? void 0 : SG.texCoord) && void 0 !== ZG ? ZG : 0,
            hasAlpha: bG
          }
        }
      }
    }
    async function OG(GG, bG, ZG, wG, SG, LG) {
      let yG = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const kG = function(GG, bG, ZG) {
          return "string" !== typeof bG ? {
            url: "",
            rootUrl: GG,
            name: ZG()
          } : bG ? bG.startsWith("data:") ? {
            url: bG,
            rootUrl: GG,
            name: ""
          } : GG ? {
            url: GG + bG,
            rootUrl: GG,
            name: bG
          } : {
            url: bG,
            rootUrl: AG(bG),
            name: MG(bG)
          } : {
            url: GG,
            rootUrl: AG(GG),
            name: MG(GG)
          }
        }(ZG, GG, SG),
        UG = {};
      bG.addPendingData(UG);
      try {
        const ZG = mG(await async function(GG, bG) {
            return "string" !== typeof bG ? bG : GG.url.startsWith("data:") ? (0, iG.s)(GG.url) : await (0, iG.u)(GG.url)
          }(kG, GG)),
          UG = new NG(ZG, wG, kG, function(GG, bG) {
            let {
              rootUrl: ZG,
              name: wG
            } = GG;
            return !ZG.startsWith("file:") && wG ? ZG : `${ZG}${bG()}/`
          }(kG, SG));
        return await LG(UG), bG.importedMeshesFiles && (bG.loadingPluginName = "JF", yG && bG.importedMeshesFiles.push(kG.url)), UG
      } finally {
        bG.removePendingData(UG)
      }
    }
    var xG = ZG(37962),
      BG = ZG(37808),
      Gb = ZG(38296);

    function bb(GG) {
      if (null === GG || void 0 === GG || !GG.min || !GG.max) return null;
      const [bG, ZG, wG] = GG.min, [SG, LG, yG] = GG.max, {
        BoundingInfo: kG,
        mK: UG
      } = (0, xG.c)();
      return new kG(new UG(bG, ZG, wG), new UG(SG, LG, yG))
    }

    function Zb(GG) {
      (0, BG.e)(GG) || (GG.geometry && GG.geometry.useBoundingInfoFromGeometry ? GG._updateBoundingInfo() : GG.refreshBoundingInfo(!0, !0))
    }
    class wb {
      constructor(GG, bG) {
        this.Ah = GG, this.decode = bG, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(GG) {
        let bG = this.viewData.get(GG.index);
        return bG || (bG = this.bufferData.then((() => GG.bytes)), this.viewData.set(GG.index, bG)), bG
      }
      viewBuffer(GG) {
        let bG = this.viewBuffers.get(GG.index);
        return bG || (bG = this.viewBytes(GG).then((GG => new((0, xG.c)().VK)(this.Ah.CK(), GG, !1))), this.viewBuffers.set(GG.index, bG)), bG
      }
      vertexBuffer(GG, bG) {
        const {
          kind: ZG,
          data: wG
        } = bG, SG = `${GG.index}:${ZG}`;
        let LG = this.vertexBuffers.get(SG);
        if (!LG) {
          const yG = GG.bufferView;
          LG = yG ? this.viewBuffer(yG).then((GG => this.layoutVertexBuffer(GG, bG))) : Promise.resolve(wG).then((GG => new((0, xG.c)().VertexBuffer)(this.Ah.CK(), GG, ZG, !1))), this.vertexBuffers.set(SG, LG)
        }
        return LG
      }
      layoutVertexBuffer(GG, bG) {
        let {
          kind: ZG,
          offset: wG,
          stride: SG,
          components: LG,
          glType: yG,
          isNormalized: kG
        } = bG;
        const UG = this.Ah.CK();
        return new((0, xG.c)().VertexBuffer)(UG, GG, ZG, !1, void 0, SG, void 0, wG, LG, yG, kG, !0, void 0, !0)
      }
      load(GG, bG, ZG) {
        const wG = (0, BG.e)(ZG),
          SG = GG => {
            wG || (ZG._delayInfo = ZG._delayInfo || [], -1 === ZG._delayInfo.indexOf(GG) && ZG._delayInfo.push(GG))
          },
          LG = bG.draco;
        if (LG) {
          for (const GG in LG.attributeIds) SG(GG);
          let yG = this.dracoGeometry.get(LG.bufferView.index);
          return yG || (yG = this.viewBytes(LG.bufferView).then((async () => {
            let SG;
            try {
              SG = await IG(bG, this.decode)
            } catch (UG) {
              throw new iG.k(`${GG}: ${UG instanceof Error?UG.message:String(UG)}`)
            }
            const LG = PG(bG, SG);
            if (wG) return LG;
            const yG = bb(bG.position),
              kG = new((0, xG.c)().MirroredGeometry)(ZG.name, this.Ah);
            yG && (kG._boundingInfo = yG, kG.useBoundingInfoFromGeometry = !0), LG.indexData && kG.setIndices(LG.indexData);
            for (const GG of LG.vertexAttributes) kG.setVerticesBuffer(this.layoutVertexBuffer(GG.data, GG), LG.vertexCount);
            return kG.link(LG), kG
          })), this.dracoGeometry.set(LG.bufferView.index, yG)), yG
        }
        const yG = [],
          kG = lG(bG);
        if (wG) return ZG.isUnIndexed = !kG.indexData, ZG.hasVertexAlpha = (0, Gb.g)(bG), Promise.resolve(kG);
        const UG = new((0, xG.c)().MirroredGeometry)(ZG.name, this.Ah),
          {
            indexData: YG
          } = kG;
        YG ? yG.push(this.viewBytes(bG.indices.bufferView).then((() => {
          UG.setIndices(YG)
        }))) : ZG.isUnIndexed = !0;
        for (const [VG, {
            kind: pG,
            accessor: fG
          }] of bG.attributes.entries()) SG(pG), yG.push(this.vertexBuffer(fG, kG.vertexAttributes[VG]).then((GG => {
          if ("position" === GG.getKind()) {
            const GG = bb(fG);
            GG && (UG._boundingInfo = GG, UG.useBoundingInfoFromGeometry = !0)
          }
          UG.setVerticesBuffer(GG, kG.vertexCount)
        })));
        return (0, Gb.g)(bG) && (ZG.hasVertexAlpha = !0), Promise.all(yG).then((() => (UG.link(kG), UG)))
      }
    }
    var Sb, Lb = ZG(37679),
      yb = ZG(37432),
      kb = ZG(38304),
      Ub = ZG(37613),
      Yb = ZG(37647),
      Vb = ZG(2751),
      pb = ZG(37639);

    function fb(GG, bG) {
      GG.metadata = GG.metadata || {};
      const ZG = GG._internalMetadata = GG._internalMetadata || {},
        wG = ZG.JF = ZG.JF || {};
      (wG.pointers = wG.pointers || []).push(bG)
    }

    function Qb(GG, bG) {
      if (bG && Object.keys(bG).length > 0) {
        const ZG = GG.metadata = GG.metadata || {};
        (ZG.JF = ZG.JF || {}).extras = bG
      }
    }

    function Kb(GG, bG) {
      bG.position = GG.translation ? yb.mK.FromArray(GG.translation) : yb.mK.Zero(), bG.rotationQuaternion = GG.rotation ? yb.Quaternion.FromArray(GG.rotation) : yb.Quaternion.Identity(), bG.nY = GG.scale ? yb.mK.FromArray(GG.scale) : yb.mK.One()
    }
    class hb {
      constructor(GG, bG) {
        if (this.Ah = GG, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, bG) {
          const bG = GG.CK(),
            ZG = GG.Gl.add((() => {
              this.dispose()
            })),
            wG = bG.iK.add((() => {
              for (const GG of [...this.geometries, ...this.meshes, ...this.textures]) GG._rebuild()
            }));
          this.release = () => {
            GG.Gl.remove(ZG), bG.iK.remove(wG)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const GG of this.meshes) this.Ah.FwG(GG);
          for (const GG of this.materials) this.Ah.addMaterial(GG);
          for (const GG of this.geometries) this.Ah.addGeometry(GG);
          for (const GG of this.transformNodes) this.Ah.addTransformNode(GG);
          for (const GG of this.textures) this.Ah.addTexture(GG)
        }
      }
      dispose() {
        var GG;
        for (const bG of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const GG of bG.slice()) GG.dispose();
          bG.length = 0
        }
        null === (GG = this.release) || void 0 === GG || GG.call(this), this.release = null
      }
    }
    class db {
      constructor(GG, bG, ZG, wG, SG, LG, yG) {
        this.asset = GG, this.Ah = bG, this.tree = ZG, this.geometryData = SG, this.materials = LG, this.lite = yG, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = wG ? ZG : null
      }
      create(GG) {
        if (this.lite) return GG();
        const bG = this.Ah;
        bG._blockEntityCollection = !!this.container;
        try {
          const bG = GG();
          return this.container && (bG._parentContainer = this.container), bG
        } finally {
          bG._blockEntityCollection = !1
        }
      }
      node(GG, bG) {
        return this.create((() => this.lite ? bG ? (0, kb.c)(this.lite, GG) : (0, kb.u)(this.lite, GG) : bG ? new((0, xG.c)().Mesh)(GG, this.Ah) : new((0, xG.c)().TransformNode)(GG, this.Ah)))
      }
      async load() {
        var GG;
        this.asset.model.json.nodes && this.createRoot();
        const bG = this.lite ? null : this.Ah,
          ZG = null !== (GG = null === bG || void 0 === bG ? void 0 : bG.blockMaterialDirtyMechanism) && void 0 !== GG && GG;
        let wG;
        bG && (bG.blockMaterialDirtyMechanism = !0);
        try {
          wG = this.loadScene()
        } finally {
          null === bG || void 0 === bG || bG._forceBlockMaterialDirtyMechanism(ZG)
        }
        await wG;
        const {
          root: SG,
          tree: LG
        } = this;
        SG && (SG.DW(!0), LG.meshes.push(SG), LG.rootNodes.push(SG));
        for (const kG of this.asset.model.nodes) {
          const GG = this.nodeObjects.get(kG.index);
          GG && ["TransformNode", "LiteNode"].includes(GG.getClassName()) && LG.transformNodes.push(GG);
          for (const bG of null !== (yG = this.nodePrimitives.get(kG.index)) && void 0 !== yG ? yG : []) {
            var yG;
            LG.meshes.push(bG);
            const GG = bG.geometry;
            GG && !LG.geometries.includes(GG) && LG.geometries.push(GG)
          }
        }
      }
      createRoot() {
        const GG = this.node("__root__", !0);
        this.root = GG, GG.DW(!1), this.Ah.useRightHandedSystem || Kb(qG, GG)
      }
      loadScene() {
        const GG = [];
        for (const bG of this.asset.model.rootNodes) GG.push(this.loadNode(this.asset.model.nodes[bG], (GG => {
          GG.parent = this.root
        })));
        return GG.push(Promise.resolve()), Promise.all(GG).then((() => {}))
      }
      loadNode(GG, bG) {
        const ZG = `/nodes/${GG.index}`,
          wG = [],
          SG = SG => {
            if (fb(SG, ZG), Kb(GG, SG), GG.hasCamera && !this.Ah.useRightHandedSystem) {
              const {
                nY: GG
              } = SG;
              GG.set(-1, GG.y, GG.z)
            }
            for (const bG of GG.children) wG.push(this.loadNode(this.asset.model.nodes[bG], (GG => {
              GG.parent = SG
            })));
            (ZG => {
              Qb(ZG, GG.extras), bG(ZG)
            })(SG)
          };
        if (null === GG.mesh) {
          const bG = this.node(sG(GG), !1);
          this.nodeObjects.set(GG.index, bG), SG(bG)
        } else {
          const bG = this.asset.model.meshes[GG.mesh];
          wG.push(this.loadMesh(`/meshes/${bG.index}`, GG, bG, SG))
        }
        return Promise.all(wG).then((() => {
          for (const ZG of null !== (bG = this.nodePrimitives.get(GG.index)) && void 0 !== bG ? bG : []) {
            var bG;
            Zb(ZG)
          }
          return this.nodeObjects.get(GG.index)
        }))
      }
      loadMesh(GG, bG, ZG, wG) {
        const SG = [],
          LG = sG(bG);
        if (1 === ZG.primitives.length) {
          const wG = ZG.primitives[0];
          SG.push(this.loadPrimitive(`${GG}/primitives/${wG.index}`, LG, wG, (GG => {
            this.nodeObjects.set(bG.index, GG), this.nodePrimitives.set(bG.index, [GG])
          })))
        } else {
          const wG = this.node(LG, !1);
          this.nodeObjects.set(bG.index, wG);
          const yG = [];
          this.nodePrimitives.set(bG.index, yG);
          for (const bG of ZG.primitives) SG.push(this.loadPrimitive(`${GG}/primitives/${bG.index}`, `${LG}_primitive${bG.index}`, bG, (GG => {
            GG.parent = wG, yG.push(GG)
          })))
        }
        const yG = this.nodeObjects.get(bG.index);
        return wG(yG), Promise.all(SG).then((() => yG))
      }
      loadPrimitive(GG, bG, ZG, wG) {
        const SG = [],
          LG = this.node(bG, !0);
        if (LG.sideOrientation = this.Ah.useRightHandedSystem ? Ub.e.CounterClockWiseSideOrientation : Ub.e.ClockWiseSideOrientation, SG.push(this.geometryData.load(GG, ZG, LG).then((GG => {
            if ((0, BG.e)(LG)) {
              var bG, ZG;
              const wG = GG;
              LG.replaceModel(wG, Int32Array.of(0, null !== (bG = null === (ZG = wG.indexData) || void 0 === ZG ? void 0 : ZG.length) && void 0 !== bG ? bG : wG.vertexCount, 0, wG.vertexCount))
            } else this.create((() => (GG.applyToMesh(LG), GG)))
          }))), this.materials) {
          const GG = 0 === ZG.mode ? Ub.e.PointListDrawMode : Ub.e.TriangleFillMode,
            bG = null === ZG.material ? null : this.asset.model.materials[ZG.material];
          SG.push(this.loadMaterial(bG, GG, (GG => {
            LG.material = GG
          })))
        }
        return fb(LG, GG), wG(LG), Promise.all(SG).then((() => LG))
      }
      loadMaterial(GG, bG, ZG) {
        var wG;
        const SG = `${null!==(wG=null===GG||void 0===GG?void 0:GG.index)&&void 0!==wG?wG:"default"}:${bG}`;
        let LG = this.materialData.get(SG);
        return LG || (LG = this.createMaterial(GG, bG), this.materialData.set(SG, LG)), ZG(LG.material), LG.promise
      }
      createMaterial(GG, bG) {
        const ZG = GG ? GG.name || `material${GG.index}` : "__GLTFLoader._default",
          {
            style: wG,
            unlit: SG
          } = this.materials;
        let LG;
        const yG = this.create((() => {
          const yG = (0, pb.e)({
            name: ZG,
            Ah: this.Ah,
            sets: {
              ...(0, Gb.c)(this.asset, GG, wG, SG),
              fillMode: bG
            },
            unrendered: !0
          });
          return LG = yG.model, yG.mirror
        }));
        let kG = Promise.resolve();
        if (GG) {
          const bG = `/materials/${GG.index}`,
            wG = LG.diffuseTexture;
          if (wG && !wG.mirror) kG = new Promise((GG => setTimeout(GG)));
          else if (wG) {
            const SG = wG.mirror;
            SG._parentContainer = this.container, SG.name = `${ZG} (Base Color)`, fb(SG, `${bG}${GG.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(SG), kG = (0, Yb.v)(wG)
          }
          Qb(yG, GG.extras), fb(yG, bG)
        }
        return this.tree.materials.push(yG), {
          material: yG,
          promise: kG
        }
      }
    }

    function Jb() {
      Lb.e.dracoDecodes = hG.decodes, Lb.e.dracoWorkersStarted = hG.workersStarted, Lb.e.dracoMostWorkers = hG.mostWorkers
    }
    async function rb(GG, bG, ZG, SG, LG) {
      try {
        return await async function(GG, bG, ZG, SG, LG, yG) {
          var kG;
          let UG;
          const YG = null === (kG = (0, Vb.i)()) || void 0 === kG ? void 0 : kG.HK,
            VG = null !== YG && void 0 !== YG && YG.tK && bG === YG.Dv() ? YG : null,
            pG = LG && !VG;
          return await OG(GG, bG, ZG, SG, wG.e, (GG => (UG = new hb(bG, pG), new db(GG, bG, UG, pG, new wb(bG, SG), yG, VG).load())), !LG), UG
        }(GG, bG, ZG, oG, SG, LG)
      } finally {
        Jb()
      }
    }
    async function zb(GG, bG, ZG, SG) {
      try {
        return await OG(GG, bG, ZG, oG, wG.e, (GG => SG(GG, new wb(bG, oG))))
      } finally {
        Jb()
      }
    }
    Sb = SG.e, VG || (VG = {
      scriptUrl: new URL(Sb.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(Sb.wasmBinaryUrl, location.href).href
    })
  },
  41918: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => yG
    });
    var wG = ZG(116),
      SG = ZG(1036);

    function LG(GG) {
      return (0, wG.isDiscordClient)() ? `https://${SG.c.discordDomain}/${GG.href}` : GG.href
    }
    const yG = {
      scriptUrl: LG(new ZG.U(ZG(41927))),
      wasmBinaryUrl: LG(new ZG.U(ZG(41932)))
    }
  },
  36579: GG => {
    GG.exports = function(GG, bG, ZG, wG) {
      var SG = self || window;
      try {
        try {
          var LG;
          try {
            LG = new SG.Blob([GG])
          } catch (YG) {
            (LG = new(SG.BlobBuilder || SG.WebKitBlobBuilder || SG.MozBlobBuilder || SG.MSBlobBuilder)).append(GG), LG = LG.getBlob()
          }
          var yG = SG.URL || SG.webkitURL,
            kG = yG.createObjectURL(LG),
            UG = new SG[bG](kG, ZG);
          return yG.revokeObjectURL(kG), UG
        } catch (YG) {
          return new SG[bG]("data:application/javascript,".concat(encodeURIComponent(GG)), ZG)
        }
      } catch (YG) {
        if (!wG) throw Error("Inline worker is not supported");
        return new SG[bG](wG, ZG)
      }
    }
  },
  41927: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41932: (GG, bG, ZG) => {
    GG.exports = ZG.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);
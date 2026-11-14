export const id = 184;
export const ids = [184];
export const modules = {
  38972: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      loadGlbAsset: () => JR,
      loadGlbTree: () => YR
    });
    var wW = MW(35984),
      CW = MW(38975),
      zR = MW(34585),
      AW = MW.n(zR);

    function bR() {
      return AW()('(()=>{class WW extends Error{}function RW(RW,MW){const wW=RW._malloc(MW);if(0===wW)throw new WW(`Draco: the decoder\'s heap refused ${MW} bytes`);return wW}function MW(WW){return{[WW.DT_FLOAT32]:[Float32Array,5126],[WW.DT_INT8]:[Int8Array,5120],[WW.DT_INT16]:[Int16Array,5122],[WW.DT_INT32]:[Int32Array,5124],[WW.DT_UINT8]:[Uint8Array,5121],[WW.DT_UINT16]:[Uint16Array,5123],[WW.DT_UINT32]:[Uint32Array,5125]}}function wW(RW,wW,CW,zR,AW){let bR=null,yR=null,NW=null;try{bR=new RW.Decoder,yR=new RW.DecoderBuffer,yR.Init(wW,wW.byteLength);let eW=0;const BW=bR.GetEncodedGeometryType(yR);if(BW===RW.TRIANGULAR_MESH){const MW=new RW.Mesh;NW=MW;const wW=bR.DecodeBufferToMesh(yR,MW);if(!wW.ok()||0===MW.ptr)throw new WW(wW.error_msg());eW=3*MW.num_faces()}else{if(BW!==RW.POINT_CLOUD)throw new WW(`Draco: Cannot decode invalid geometry type ${BW}`);{const MW=new RW.PointCloud;NW=MW;const wW=bR.DecodeBufferToPointCloud(yR,MW);if(!wW.ok()||!MW.ptr)throw new WW(wW.error_msg())}}const tR=NW.num_points();if(tR!==zR.vertices||eW!==zR.indices)throw new WW(`Draco: decoded ${tR} vertices and ${eW} indices, the accessors declare ${zR.vertices} and ${zR.indices}`);const TW=MW(RW),gR=[];for(const{kind:RW,id:MW,components:wW}of CW){const CW=bR.GetAttributeByUniqueId(NW,MW);if(!CW||0===CW.ptr)throw new WW(`Draco: no attribute with id ${MW} (${RW})`);const zR=CW.data_type();if(!TW[zR])throw new WW(`Draco: Cannot decode invalid data type ${zR}`);if(CW.num_components()!==wW)throw new WW(`Draco: ${RW} decodes to ${CW.num_components()} components, its accessor declares ${wW}`);gR.push([RW,CW,zR])}return AW({dracoDecoder:bR,geometry:NW,triangles:BW===RW.TRIANGULAR_MESH,numPoints:tR,numIndices:eW,attributes:gR})}finally{NW&&RW.destroy(NW),yR&&RW.destroy(yR),bR&&RW.destroy(bR)}}const CW=self;let zR=null;self.onmessage=WW=>{let{data:AW}=WW;if("init"===AW.id){try{importScripts(AW.url),zR=DracoDecoderModule({wasmBinary:AW.wasmBinary}),CW.postMessage({id:"initDone"})}catch(BW){CW.postMessage({id:"initError",message:BW instanceof Error?BW.message:String(BW)})}return}const{seq:bR,data:yR,attributeIds:NW,expected:eW}=AW;zR?zR.then((WW=>{try{const zR=function(WW,CW,zR,AW){const bR=Object.keys(zR).map((WW=>({kind:WW,id:zR[WW],components:AW.components[WW]})));return wW(WW,CW,bR,AW,(wW=>{let{dracoDecoder:CW,geometry:zR,triangles:AW,numPoints:bR,numIndices:yR,attributes:NW}=wW;const eW=MW(WW);let BW=null;if(AW){const MW=4*yR,wW=RW(WW,MW);try{CW.GetTrianglesUInt32Array(zR,MW,wW),BW=new Uint32Array(yR),BW.set(new Uint32Array(WW.HEAPF32.buffer,wW,yR))}finally{WW._free(wW)}}const tR=[];for(const[MW,TW,gR]of NW){const[wW]=eW[gR],AW=TW.num_components(),yR=bR*AW,NW=yR*wW.BYTES_PER_ELEMENT,BW=RW(WW,NW);try{CW.GetAttributeDataArrayForAllPoints(zR,TW,gR,NW,BW),tR.push({kind:MW,data:new wW(WW.HEAPF32.buffer,BW,yR).slice(),size:AW,byteOffset:TW.byte_offset(),byteStride:TW.byte_stride(),normalized:TW.normalized()})}finally{WW._free(BW)}}return{indices:BW,attributes:tR,totalVertices:bR}}))}(WW,yR,NW,eW),AW=zR.attributes.map((WW=>WW.data.buffer));zR.indices&&AW.push(zR.indices.buffer),CW.postMessage({id:"decoded",seq:bR,...zR},AW)}catch(BW){CW.postMessage({id:"decodeError",seq:bR,message:BW instanceof Error?BW.message:String(BW)})}}),(WW=>{CW.postMessage({id:"decodeError",seq:bR,message:WW instanceof Error?WW.message:String(WW)})})):CW.postMessage({id:"decodeError",seq:bR,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, MW.p + "dracoDecode.worker.671d7c15.worker.js")
    }
    const yR = 1e3;
    let NW = null,
      eW = null;
    const BW = [],
      tR = [];
    let TW = 0;
    const gR = {
      decodes: 0,
      workersStarted: 0,
      mostWorkers: 0
    };

    function iR() {
      if (!NW) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: WW,
        wasmBinaryUrl: RW
      } = NW;
      return eW ??= fetch(RW).then((WW => {
        if (!WW.ok) throw new Error(`Draco: fetching ${RW} failed: ${WW.status}`);
        return WW.arrayBuffer()
      })), eW.catch((() => {
        eW = null
      })), gR.workersStarted++, eW.then((RW => new Promise(((MW, wW) => {
        const CW = new bR;
        CW.onerror = WW => {
          CW.onmessage = null, CW.onerror = null, CW.terminate(), wW(new Error("Draco: the decode worker failed to start" + (WW.message ? `: ${WW.message}` : " (its script did not load)")))
        }, CW.onmessage = WW => {
          let {
            data: RW
          } = WW;
          CW.onmessage = null, CW.onerror = null, "initDone" === RW.id ? MW(CW) : (CW.terminate(), wW(new Error(`Draco: ${"initError"===RW.id?RW.message:"the worker did not start"}`)))
        };
        const zR = RW.slice(0),
          AW = {
            id: "init",
            url: WW,
            wasmBinary: zR
          };
        CW.postMessage(AW, [zR])
      }))))
    }

    function YW(WW) {
      const RW = BW.indexOf(WW); - 1 !== RW && BW.splice(RW, 1);
      const MW = tR.shift();
      MW && PW(MW)
    }

    function JW(WW, RW) {
      WW.busy = !0, WW.releaseTimer && (clearTimeout(WW.releaseTimer), WW.releaseTimer = null);
      WW.worker.then((MW => {
        const wW = TW++;
        MW.onmessage = CW => {
          let {
            data: zR
          } = CW;
          if (("decoded" === zR.id || "decodeError" === zR.id) && zR.seq === wW) {
            if (MW.onmessage = null, MW.onerror = null, "decoded" === zR.id) return gR.decodes++, RW.resolve({
              indices: zR.indices,
              attributes: zR.attributes,
              totalVertices: zR.totalVertices
            }), void(() => {
              const RW = tR.shift();
              RW ? JW(WW, RW) : (WW.busy = !1, WW.releaseTimer = setTimeout((() => {
                const RW = BW.indexOf(WW); - 1 !== RW && BW.splice(RW, 1), WW.worker.then((WW => {
                  WW.terminate()
                }))
              }), yR))
            })();
            MW.terminate(), RW.reject(new Error(zR.message)), YW(WW)
          }
        }, MW.onerror = wW => {
          MW.onmessage = null, MW.onerror = null, MW.terminate(), RW.reject(new Error(`Draco: the decode worker failed: ${wW.message}`)), YW(WW)
        };
        const CW = {
          id: "decode",
          seq: wW,
          data: RW.data,
          attributeIds: RW.attributeIds,
          expected: RW.expected
        };
        MW.postMessage(CW, [RW.data.buffer])
      }), (MW => {
        RW.reject(MW instanceof Error ? MW : new Error(String(MW))), YW(WW)
      }))
    }

    function PW(WW) {
      const RW = BW.find((WW => !WW.busy));
      if (RW) JW(RW, WW);
      else {
        if (BW.length < function() {
            const WW = "object" === typeof navigator ? navigator.hardwareConcurrency : 0;
            return WW ? Math.max(1, Math.min(Math.floor(.5 * WW), 4)) : 1
          }()) {
          const RW = {
            worker: iR(),
            busy: !0,
            releaseTimer: null
          };
          return BW.push(RW), gR.mostWorkers = Math.max(gR.mostWorkers, BW.length), void JW(RW, WW)
        }
        tR.push(WW)
      }
    }

    function IW(WW, RW, MW) {
      return new Promise(((wW, CW) => {
        PW({
          data: new Int8Array(WW.buffer, WW.byteOffset, WW.byteLength).slice(),
          attributeIds: RW,
          expected: MW,
          resolve: wW,
          reject: CW
        })
      }))
    }
    var oW = MW(35502),
      lW = MW(35506),
      FW = MW(32658),
      fW = MW(32650);
    const QW = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function rR(WW) {
      const RW = (0, fW.f)(WW.byteLength);
      if (RW) throw new FW.o(RW);
      const {
        json: MW,
        bin: wW
      } = (0, FW.x)(WW), CW = (0, fW.e)(MW, wW);
      if (CW) throw new FW.o(CW);
      try {
        return function(WW, RW) {
          var MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW;
          const JW = new Map,
            PW = MW => {
              let wW = JW.get(MW);
              if (!wW) {
                var CW;
                const zR = WW.bufferViews[MW],
                  AW = null !== (CW = zR.byteOffset) && void 0 !== CW ? CW : 0;
                wW = {
                  index: MW,
                  bytes: RW.subarray(AW, AW + zR.byteLength),
                  byteStride: zR.byteStride
                }, JW.set(MW, wW)
              }
              return wW
            },
            IW = new Map,
            oW = RW => {
              let MW = IW.get(RW);
              if (!MW) {
                var wW;
                const CW = WW.accessors[RW];
                MW = {
                  index: RW,
                  count: CW.count,
                  type: CW.type,
                  numComponents: FW.r[CW.type],
                  componentType: CW.componentType,
                  normalized: null !== (wW = CW.normalized) && void 0 !== wW && wW,
                  byteOffset: CW.byteOffset,
                  bufferView: void 0 === CW.bufferView ? null : PW(CW.bufferView),
                  min: CW.min,
                  max: CW.max
                }, IW.set(RW, MW)
              }
              return MW
            },
            lW = null !== (MW = null === (wW = WW.extensionsUsed) || void 0 === wW ? void 0 : wW.includes("KHR_draco_mesh_compression")) && void 0 !== MW && MW,
            fW = (null !== (CW = WW.meshes) && void 0 !== CW ? CW : []).map(((RW, MW) => {
              const wW = RW.primitives.map(((RW, MW) => {
                var wW, CW, zR;
                const AW = lW ? null === (wW = RW.extensions) || void 0 === wW ? void 0 : wW.KHR_draco_mesh_compression : void 0;
                let bR = null;
                const yR = [];
                if (AW) {
                  const MW = {
                    vertices: WW.accessors[RW.attributes.POSITION].count,
                    indices: void 0 === RW.indices ? 0 : WW.accessors[RW.indices].count,
                    components: {}
                  };
                  bR = {
                    bufferView: PW(AW.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: MW
                  };
                  for (const [wW, CW] of FW.h) {
                    const zR = AW.attributes[wW];
                    if (void 0 === zR) continue;
                    bR.attributeIds[CW] = zR;
                    const yR = RW.attributes[wW];
                    var NW;
                    if (void 0 !== yR) bR.normalized[CW] = null !== (NW = WW.accessors[yR].normalized) && void 0 !== NW && NW, MW.components[CW] = FW.r[WW.accessors[yR].type]
                  }
                } else
                  for (const [WW, eW] of FW.h) {
                    const MW = RW.attributes[WW];
                    void 0 !== MW && yR.push({
                      semantic: WW,
                      kind: eW,
                      accessor: oW(MW)
                    })
                  }
                return {
                  index: MW,
                  mode: null !== (CW = RW.mode) && void 0 !== CW ? CW : 4,
                  attributes: yR,
                  indices: AW || void 0 === RW.indices ? null : oW(RW.indices),
                  position: void 0 === RW.attributes.POSITION ? null : oW(RW.attributes.POSITION),
                  material: null !== (zR = RW.material) && void 0 !== zR ? zR : null,
                  draco: bR
                }
              }));
              return {
                index: MW,
                name: RW.name,
                primitives: wW,
                extras: RW.extras
              }
            })),
            rR = (null !== (zR = WW.nodes) && void 0 !== zR ? zR : []).map(((WW, RW) => {
              var MW, wW;
              return {
                index: RW,
                name: WW.name,
                children: null !== (MW = WW.children) && void 0 !== MW ? MW : [],
                mesh: null !== (wW = WW.mesh) && void 0 !== wW ? wW : null,
                translation: WW.translation,
                rotation: WW.rotation,
                scale: WW.scale,
                hasCamera: void 0 !== WW.camera,
                extras: WW.extras
              }
            })),
            cR = null !== (AW = null === (bR = WW.extensionsUsed) || void 0 === bR ? void 0 : bR.includes("KHR_materials_unlit")) && void 0 !== AW && AW,
            XW = null !== (yR = null === (NW = WW.extensionsUsed) || void 0 === NW ? void 0 : NW.includes("KHR_texture_transform")) && void 0 !== yR && yR,
            jR = (null !== (eW = WW.materials) && void 0 !== eW ? eW : []).map(((WW, RW) => {
              var MW, wW, CW, zR;
              const AW = WW.pbrMetallicRoughness,
                bR = null === AW || void 0 === AW ? void 0 : AW.baseColorTexture;
              return {
                index: RW,
                name: WW.name,
                extras: WW.extras,
                unlit: cR && void 0 !== (null === (MW = WW.extensions) || void 0 === MW ? void 0 : MW.KHR_materials_unlit),
                pbr: AW ? {
                  baseColorFactor: AW.baseColorFactor,
                  metallicFactor: AW.metallicFactor,
                  roughnessFactor: AW.roughnessFactor
                } : null,
                baseColorTexture: bR ? {
                  texture: bR.index,
                  transform: XW && (null === (wW = bR.extensions) || void 0 === wW ? void 0 : wW.KHR_texture_transform) || null
                } : null,
                emissiveFactor: WW.emissiveFactor,
                alphaMode: null !== (CW = WW.alphaMode) && void 0 !== CW ? CW : "OPAQUE",
                alphaCutoff: WW.alphaCutoff,
                doubleSided: null !== (zR = WW.doubleSided) && void 0 !== zR && zR
              }
            })),
            kR = (null !== (BW = WW.textures) && void 0 !== BW ? BW : []).map(((RW, MW) => {
              var wW, CW;
              const zR = void 0 === RW.sampler ? QW : {
                index: RW.sampler,
                ...null === (wW = WW.samplers) || void 0 === wW ? void 0 : wW[RW.sampler]
              };
              return {
                index: MW,
                sampler: {
                  index: zR.index,
                  magFilter: zR.magFilter,
                  minFilter: zR.minFilter,
                  wrapS: zR.wrapS,
                  wrapT: zR.wrapT
                },
                image: null !== (CW = RW.source) && void 0 !== CW ? CW : -1
              }
            })),
            aR = (null !== (tR = WW.images) && void 0 !== tR ? tR : []).map(((WW, RW) => ({
              index: RW,
              name: WW.name,
              mimeType: WW.mimeType,
              bufferView: PW(WW.bufferView)
            }))),
            sW = null !== (TW = (0, FW.v)(WW)) && void 0 !== TW ? TW : 0;
          return {
            json: WW,
            rootNodes: null !== (gR = null === (iR = WW.scenes) || void 0 === iR || null === (YW = iR[sW]) || void 0 === YW ? void 0 : YW.nodes) && void 0 !== gR ? gR : [],
            nodes: rR,
            meshes: fW,
            materials: jR,
            textures: kR,
            images: aR
          }
        }(MW, wW)
      } catch (zR) {
        throw zR instanceof FW.l ? zR : new FW.l(`reading the GLB failed: ${zR instanceof Error?zR.message:String(zR)}`)
      }
    }
    async function cR(WW, RW) {
      var MW, wW;
      const CW = WW.draco;
      if (!CW) throw new FW.l("not a Draco primitive");
      let zR;
      try {
        zR = await RW(CW.bufferView.bytes, CW.attributeIds, CW.expected)
      } catch (NW) {
        throw new FW.l(`Draco decoding failed: ${NW instanceof Error?NW.message:String(NW)}`)
      }
      const {
        vertices: AW,
        indices: bR,
        components: yR
      } = CW.expected;
      if (zR.totalVertices !== AW || (null !== (MW = null === (wW = zR.indices) || void 0 === wW ? void 0 : wW.length) && void 0 !== MW ? MW : 0) !== bR || zR.attributes.some((WW => WW.size !== yR[WW.kind] || WW.data.length !== AW * WW.size))) throw new FW.l("Draco decoding gave other counts than the accessors declare");
      for (const eW of zR.attributes) {
        const WW = CW.normalized[eW.kind];
        void 0 !== WW && (eW.normalized = WW)
      }
      return zR
    }
    const XW = new WeakMap;

    function jR(WW, RW) {
      var MW;
      const wW = null !== (MW = XW.get(WW)) && void 0 !== MW ? MW : RW(WW);
      return XW.set(WW, wW), wW
    }

    function kR(WW) {
      const RW = WW.bufferView,
        MW = 5125 === WW.componentType ? Uint32Array : Uint16Array,
        wW = RW.bytes.buffer,
        CW = RW.bytes.byteOffset + (WW.byteOffset || 0);
      return CW % MW.BYTES_PER_ELEMENT !== 0 ? new MW(wW.slice(CW, CW + WW.count * MW.BYTES_PER_ELEMENT), 0) : new MW(wW, CW, WW.count)
    }

    function aR(WW, RW) {
      if (WW.min && WW.max) return [new Float64Array(WW.min), new Float64Array(WW.max)];
      const MW = RW.find((WW => {
          let {
            kind: RW
          } = WW;
          return "position" === RW
        })),
        wW = MW ? (0, lW.i)(MW, WW.count) : new Float32Array(0);
      return (0, lW.u)(wW.length / 3, ((WW, RW) => wW[3 * WW + RW]))
    }

    function sW(WW) {
      const RW = WW.attributes.map((WW => {
          var RW, MW;
          let {
            kind: wW,
            accessor: CW
          } = WW;
          const {
            bufferView: zR,
            numComponents: AW
          } = CW;
          if (!zR) {
            return {
              kind: wW,
              data: jR(CW, (() => new Float32Array(AW * CW.count))),
              offset: 0,
              stride: 4 * AW,
              components: AW,
              glType: 5126,
              isNormalized: !1
            }
          }
          const bR = null !== (RW = zR.byteStride) && void 0 !== RW ? RW : AW * FW.b[CW.componentType];
          return {
            kind: wW,
            data: zR.bytes,
            offset: null !== (MW = CW.byteOffset) && void 0 !== MW ? MW : 0,
            stride: bR,
            components: AW,
            glType: CW.componentType,
            isNormalized: CW.normalized
          }
        })),
        MW = WW.indices,
        wW = MW && jR(MW, kR),
        CW = WW.position;
      return new lW.e(RW, wW, CW.count, ...aR(CW, RW))
    }
    const dW = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function pW(WW, RW) {
      const MW = RW.attributes.map((WW => {
        let {
          kind: RW,
          data: MW,
          size: wW,
          byteOffset: CW,
          byteStride: zR,
          normalized: AW
        } = WW;
        return {
          kind: RW,
          data: MW,
          offset: CW,
          stride: zR,
          components: wW,
          glType: 5120 + dW.indexOf(MW.constructor),
          isNormalized: AW
        }
      }));
      return new lW.e(MW, RW.indices, RW.totalVertices, ...aR(WW.position, MW))
    }

    function hW(WW) {
      const RW = WW.lastIndexOf("/");
      return RW < 0 ? WW : WW.substring(RW + 1)
    }

    function UW(WW) {
      const RW = WW.lastIndexOf("/");
      return RW < 0 ? "" : WW.substring(0, RW + 1)
    }

    function EW(WW) {
      return WW.name || `node${WW.index}`
    }
    const VW = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      mR = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      xR = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function vR(WW) {
      var RW, MW, wW, CW;
      const zR = null !== (RW = WW.minFilter) && void 0 !== RW ? RW : 9987;
      return 9729 === (null !== (MW = WW.magFilter) && void 0 !== MW ? MW : 9729) ? null !== (wW = mR[zR]) && void 0 !== wW ? wW : 3 : null !== (CW = xR[zR]) && void 0 !== CW ? CW : 4
    }
    const KW = {
      33071: 0,
      33648: 2
    };

    function uW(WW) {
      var RW;
      return null !== (RW = KW[null !== WW && void 0 !== WW ? WW : 10497]) && void 0 !== RW ? RW : 1
    }

    function OW(WW) {
      return 9728 === WW.minFilter || 9729 === WW.minFilter
    }

    function nW(WW) {
      var RW, MW, wW;
      const CW = Float64Array.from(null !== (RW = WW.scale) && void 0 !== RW ? RW : [1, 1, 1]);
      return WW.hasCamera && (CW[0] = -1), {
        translation: Float64Array.from(null !== (MW = WW.translation) && void 0 !== MW ? MW : [0, 0, 0]),
        rotation: Float64Array.from(null !== (wW = WW.rotation) && void 0 !== wW ? wW : [0, 0, 0, 1]),
        scale: CW
      }
    }

    function GW(WW, RW) {
      let {
        translation: MW,
        rotation: wW,
        scale: CW
      } = WW;
      const zR = new Float32Array(16);
      return (0, oW.c)(CW, 0, wW, 0, MW, 0, zR), RW && (0, oW.i)(zR, RW, 0, zR), zR
    }
    class LW {
      constructor(WW, RW, MW, wW) {
        this.model = WW, this.decode = RW, this.fileInfo = MW, this.uniqueRootUrl = wW, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const CW = new Set,
          zR = (RW, MW) => {
            const wW = WW.nodes[RW];
            if (this.parents.has(wW)) throw new FW.l(`/nodes/${RW}: Invalid recursive node hierarchy`);
            this.parents.set(wW, MW);
            const AW = null === wW.mesh ? [] : WW.meshes[wW.mesh].primitives,
              bR = AW.map((WW => {
                const RW = AW.length > 1;
                return {
                  name: RW ? `${EW(wW)}_primitive${WW.index}` : EW(wW),
                  node: wW,
                  primitive: WW,
                  part: RW,
                  geometry: null
                }
              }));
            this.uses.set(wW, bR);
            const yR = null !== wW.mesh && CW.has(wW.mesh);
            CW.add(wW.mesh), this.own.set(wW, yR ? [] : bR);
            for (const WW of wW.children) zR(WW, wW)
          };
        for (const AW of WW.rootNodes) zR(AW, null);
        this.primitives = WW.nodes.flatMap((WW => {
          var RW;
          return null !== (RW = this.own.get(WW)) && void 0 !== RW ? RW : []
        }))
      }
      decodeGeometries() {
        const WW = new Map;
        return Promise.all(this.primitives.map((async RW => {
          const {
            primitive: MW
          } = RW, wW = MW.draco;
          let CW = wW ? WW.get(wW.bufferView.index) : Promise.resolve(sW(MW));
          CW || (CW = cR(MW, this.decode).then((WW => pW(MW, WW))), WW.set(wW.bufferView.index, CW)), RW.geometry = await CW
        })))
      }
      parentOf(WW) {
        var RW;
        return null !== (RW = this.parents.get(WW)) && void 0 !== RW ? RW : null
      }
      meshesUnder(WW) {
        const RW = this.model.nodes.filter((WW => this.uses.has(WW)));
        for (const wW of RW) {
          const RW = this.uses.get(wW),
            MW = RW.find((RW => RW.name === WW));
          if (MW) return 1 === RW.length ? this.subtree(wW) : this.own.get(wW).includes(MW) ? [MW] : []
        }
        const MW = RW.find((RW => 1 !== this.uses.get(RW).length && EW(RW) === WW));
        return MW ? this.subtree(MW) : null
      }
      subtree(WW) {
        return [...this.own.get(WW), ...WW.children.flatMap((WW => this.subtree(this.model.nodes[WW])))]
      }
      worldMatrix(WW, RW, MW) {
        let wW = GW(nW(RW ? VW : {}), null);
        const CW = [];
        for (let AW = WW.part ? WW.node : this.parentOf(WW.node); AW; AW = this.parentOf(AW)) CW.unshift(AW);
        for (const AW of CW) wW = GW(nW(AW), wW);
        const zR = nW(WW.part ? {} : WW.node);
        return void 0 !== MW && zR.scale.fill(MW), GW(zR, wW)
      }
      floats(WW) {
        const {
          vertexAttributes: RW,
          vertexCount: MW
        } = WW.geometry;
        return new Map(RW.map((WW => [WW.kind, (0, lW.i)(WW, MW)])))
      }
      imageUrl(WW) {
        return function(WW, RW, MW) {
          let {
            name: wW
          } = RW;
          return `data:${WW}${wW}#image${MW}`
        }(this.uniqueRootUrl, this.fileInfo, WW)
      }
      textureDesc(WW, RW) {
        var MW;
        let {
          texture: wW,
          transform: CW
        } = WW;
        const {
          sampler: zR,
          image: AW
        } = this.model.textures[wW], {
          bufferView: bR,
          mimeType: yR,
          name: NW
        } = this.model.images[AW], eW = CW && {
          ...CW.offset ? {
            uOffset: CW.offset[0],
            vOffset: CW.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...CW.rotation ? {
            wAng: -CW.rotation
          } : {},
          ...CW.scale ? {
            uScale: CW.scale[0],
            vScale: CW.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(AW),
          noMipmap: OW(zR),
          invertY: !1,
          samplingMode: vR(zR),
          data: {
            bytes: bR.bytes,
            mimeType: yR,
            label: NW,
            context: `/textures/${wW}`
          },
          sets: {
            wrapU: uW(zR.wrapS),
            wrapV: uW(zR.wrapT),
            ...eW,
            coordinatesIndex: null !== (MW = null === CW || void 0 === CW ? void 0 : CW.texCoord) && void 0 !== MW ? MW : 0,
            hasAlpha: RW
          }
        }
      }
    }
    async function HW(WW, RW, MW, wW, CW, zR) {
      let AW = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const bR = function(WW, RW, MW) {
          return "string" !== typeof RW ? {
            url: "",
            rootUrl: WW,
            name: MW()
          } : RW ? RW.startsWith("data:") ? {
            url: RW,
            rootUrl: WW,
            name: ""
          } : WW ? {
            url: WW + RW,
            rootUrl: WW,
            name: RW
          } : {
            url: RW,
            rootUrl: UW(RW),
            name: hW(RW)
          } : {
            url: WW,
            rootUrl: UW(WW),
            name: hW(WW)
          }
        }(MW, WW, CW),
        yR = {};
      RW.addPendingData(yR);
      try {
        const MW = rR(await async function(WW, RW) {
            return "string" !== typeof RW ? RW : WW.url.startsWith("data:") ? (0, FW.s)(WW.url) : await (0, FW.t)(WW.url)
          }(bR, WW)),
          yR = new LW(MW, wW, bR, function(WW, RW) {
            let {
              rootUrl: MW,
              name: wW
            } = WW;
            return !MW.startsWith("file:") && wW ? MW : `${MW}${RW()}/`
          }(bR, CW));
        return await zR(yR), RW.importedMeshesFiles && (RW.loadingPluginName = "CNW", AW && RW.importedMeshesFiles.push(bR.url)), yR
      } finally {
        RW.removePendingData(yR)
      }
    }
    var DW = MW(35632),
      qR = MW(35475),
      ZW = MW(35963);

    function SW(WW) {
      if (null === WW || void 0 === WW || !WW.min || !WW.max) return null;
      const [RW, MW, wW] = WW.min, [CW, zR, AW] = WW.max, {
        BoundingInfo: bR,
        vC: yR
      } = (0, DW.b)();
      return new bR(new yR(RW, MW, wW), new yR(CW, zR, AW))
    }

    function WR(WW) {
      (0, qR.f)(WW) || (WW.geometry && WW.geometry.useBoundingInfoFromGeometry ? WW._updateBoundingInfo() : WW.refreshBoundingInfo(!0, !0))
    }
    class RR {
      constructor(WW, RW) {
        this.LC = WW, this.decode = RW, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(WW) {
        let RW = this.viewData.get(WW.index);
        return RW || (RW = this.bufferData.then((() => WW.bytes)), this.viewData.set(WW.index, RW)), RW
      }
      viewBuffer(WW) {
        let RW = this.viewBuffers.get(WW.index);
        return RW || (RW = this.viewBytes(WW).then((WW => new((0, DW.b)().fw)(this.LC.mC(), WW, !1))), this.viewBuffers.set(WW.index, RW)), RW
      }
      vertexBuffer(WW, RW) {
        const {
          kind: MW,
          data: wW
        } = RW, CW = `${WW.index}:${MW}`;
        let zR = this.vertexBuffers.get(CW);
        if (!zR) {
          const AW = WW.bufferView;
          zR = AW ? this.viewBuffer(AW).then((WW => this.layoutVertexBuffer(WW, RW))) : Promise.resolve(wW).then((WW => new((0, DW.b)().VertexBuffer)(this.LC.mC(), WW, MW, !1))), this.vertexBuffers.set(CW, zR)
        }
        return zR
      }
      layoutVertexBuffer(WW, RW) {
        let {
          kind: MW,
          offset: wW,
          stride: CW,
          components: zR,
          glType: AW,
          isNormalized: bR
        } = RW;
        const yR = this.LC.mC();
        return new((0, DW.b)().VertexBuffer)(yR, WW, MW, !1, void 0, CW, void 0, wW, zR, AW, bR, !0, void 0, !0)
      }
      load(WW, RW, MW) {
        const wW = (0, qR.f)(MW),
          CW = WW => {
            wW || (MW._delayInfo = MW._delayInfo || [], -1 === MW._delayInfo.indexOf(WW) && MW._delayInfo.push(WW))
          },
          zR = RW.draco;
        if (zR) {
          for (const WW in zR.attributeIds) CW(WW);
          let AW = this.dracoGeometry.get(zR.bufferView.index);
          return AW || (AW = this.viewBytes(zR.bufferView).then((async () => {
            let CW;
            try {
              CW = await cR(RW, this.decode)
            } catch (yR) {
              throw new FW.l(`${WW}: ${yR instanceof Error?yR.message:String(yR)}`)
            }
            const zR = pW(RW, CW);
            if (wW) return zR;
            const AW = SW(RW.position),
              bR = new((0, DW.b)().MirroredGeometry)(MW.name, this.LC);
            AW && (bR._boundingInfo = AW, bR.useBoundingInfoFromGeometry = !0), zR.indexData && bR.setIndices(zR.indexData);
            for (const WW of zR.vertexAttributes) bR.setVerticesBuffer(this.layoutVertexBuffer(WW.data, WW), zR.vertexCount);
            return bR.link(zR), bR
          })), this.dracoGeometry.set(zR.bufferView.index, AW)), AW
        }
        const AW = [],
          bR = sW(RW);
        if (wW) return MW.isUnIndexed = !bR.indexData, MW.hasVertexAlpha = (0, ZW.i)(RW), Promise.resolve(bR);
        const yR = new((0, DW.b)().MirroredGeometry)(MW.name, this.LC),
          {
            indexData: NW
          } = bR;
        NW ? AW.push(this.viewBytes(RW.indices.bufferView).then((() => {
          yR.setIndices(NW)
        }))) : MW.isUnIndexed = !0;
        for (const [eW, {
            kind: BW,
            accessor: tR
          }] of RW.attributes.entries()) CW(BW), AW.push(this.vertexBuffer(tR, bR.vertexAttributes[eW]).then((WW => {
          if ("position" === WW.getKind()) {
            const WW = SW(tR);
            WW && (yR._boundingInfo = WW, yR.useBoundingInfoFromGeometry = !0)
          }
          yR.setVerticesBuffer(WW, bR.vertexCount)
        })));
        return (0, ZW.i)(RW) && (MW.hasVertexAlpha = !0), Promise.all(AW).then((() => (yR.link(bR), yR)))
      }
    }
    var MR, wR = MW(35415),
      CR = MW(35317),
      zM = MW(35978),
      AR = MW(35366),
      bM = MW(35403),
      yM = MW(2154),
      NR = MW(35392);

    function eR(WW, RW) {
      WW.metadata = WW.metadata || {};
      const MW = WW._internalMetadata = WW._internalMetadata || {},
        wW = MW.CNW = MW.CNW || {};
      (wW.pointers = wW.pointers || []).push(RW)
    }

    function BR(WW, RW) {
      if (RW && Object.keys(RW).length > 0) {
        const MW = WW.metadata = WW.metadata || {};
        (MW.CNW = MW.CNW || {}).extras = RW
      }
    }

    function tM(WW, RW) {
      RW.position = WW.translation ? CR.vC.FromArray(WW.translation) : CR.vC.Zero(), RW.rotationQuaternion = WW.rotation ? CR.Quaternion.FromArray(WW.rotation) : CR.Quaternion.Identity(), RW.NA = WW.scale ? CR.vC.FromArray(WW.scale) : CR.vC.One()
    }
    class TR {
      constructor(WW, RW) {
        if (this.LC = WW, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, RW) {
          const RW = WW.mC(),
            MW = WW.rMW.add((() => {
              this.dispose()
            })),
            wW = RW.onContextRestoredObservable.add((() => {
              for (const WW of [...this.geometries, ...this.meshes, ...this.textures]) WW._rebuild()
            }));
          this.release = () => {
            WW.rMW.remove(MW), RW.onContextRestoredObservable.remove(wW)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const WW of this.meshes) this.LC.TNW(WW);
          for (const WW of this.materials) this.LC.addMaterial(WW);
          for (const WW of this.geometries) this.LC.addGeometry(WW);
          for (const WW of this.transformNodes) this.LC.addTransformNode(WW);
          for (const WW of this.textures) this.LC.addTexture(WW)
        }
      }
      dispose() {
        var WW;
        for (const RW of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const WW of RW.slice()) WW.dispose();
          RW.length = 0
        }
        null === (WW = this.release) || void 0 === WW || WW.call(this), this.release = null
      }
    }
    class gM {
      constructor(WW, RW, MW, wW, CW, zR, AW) {
        this.asset = WW, this.LC = RW, this.tree = MW, this.geometryData = CW, this.materials = zR, this.lite = AW, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = wW ? MW : null
      }
      create(WW) {
        if (this.lite) return WW();
        const RW = this.LC;
        RW._blockEntityCollection = !!this.container;
        try {
          const RW = WW();
          return this.container && (RW._parentContainer = this.container), RW
        } finally {
          RW._blockEntityCollection = !1
        }
      }
      node(WW, RW) {
        return this.create((() => this.lite ? RW ? (0, zM.g)(this.lite, WW) : (0, zM.t)(this.lite, WW) : RW ? new((0, DW.b)().Mesh)(WW, this.LC) : new((0, DW.b)().TransformNode)(WW, this.LC)))
      }
      async load() {
        var WW;
        this.asset.model.json.nodes && this.createRoot();
        const RW = this.lite ? null : this.LC,
          MW = null !== (WW = null === RW || void 0 === RW ? void 0 : RW.blockMaterialDirtyMechanism) && void 0 !== WW && WW;
        let wW;
        RW && (RW.blockMaterialDirtyMechanism = !0);
        try {
          wW = this.loadScene()
        } finally {
          null === RW || void 0 === RW || RW._forceBlockMaterialDirtyMechanism(MW)
        }
        await wW;
        const {
          root: CW,
          tree: zR
        } = this;
        CW && (CW.kMW(!0), zR.meshes.push(CW), zR.rootNodes.push(CW));
        for (const bR of this.asset.model.nodes) {
          const WW = this.nodeObjects.get(bR.index);
          WW && ["TransformNode", "LiteNode"].includes(WW.getClassName()) && zR.transformNodes.push(WW);
          for (const RW of null !== (AW = this.nodePrimitives.get(bR.index)) && void 0 !== AW ? AW : []) {
            var AW;
            zR.meshes.push(RW);
            const WW = RW.geometry;
            WW && !zR.geometries.includes(WW) && zR.geometries.push(WW)
          }
        }
      }
      createRoot() {
        const WW = this.node("__root__", !0);
        this.root = WW, WW.kMW(!1), this.LC.useRightHandedSystem || tM(VW, WW)
      }
      loadScene() {
        const WW = [];
        for (const RW of this.asset.model.rootNodes) WW.push(this.loadNode(this.asset.model.nodes[RW], (WW => {
          WW.parent = this.root
        })));
        return WW.push(Promise.resolve()), Promise.all(WW).then((() => {}))
      }
      loadNode(WW, RW) {
        const MW = `/nodes/${WW.index}`,
          wW = [],
          CW = CW => {
            if (eR(CW, MW), tM(WW, CW), WW.hasCamera && !this.LC.useRightHandedSystem) {
              const {
                NA: WW
              } = CW;
              WW.set(-1, WW.y, WW.z)
            }
            for (const RW of WW.children) wW.push(this.loadNode(this.asset.model.nodes[RW], (WW => {
              WW.parent = CW
            })));
            (MW => {
              BR(MW, WW.extras), RW(MW)
            })(CW)
          };
        if (null === WW.mesh) {
          const RW = this.node(EW(WW), !1);
          this.nodeObjects.set(WW.index, RW), CW(RW)
        } else {
          const RW = this.asset.model.meshes[WW.mesh];
          wW.push(this.loadMesh(`/meshes/${RW.index}`, WW, RW, CW))
        }
        return Promise.all(wW).then((() => {
          for (const MW of null !== (RW = this.nodePrimitives.get(WW.index)) && void 0 !== RW ? RW : []) {
            var RW;
            WR(MW)
          }
          return this.nodeObjects.get(WW.index)
        }))
      }
      loadMesh(WW, RW, MW, wW) {
        const CW = [],
          zR = EW(RW);
        if (1 === MW.primitives.length) {
          const wW = MW.primitives[0];
          CW.push(this.loadPrimitive(`${WW}/primitives/${wW.index}`, zR, wW, (WW => {
            this.nodeObjects.set(RW.index, WW), this.nodePrimitives.set(RW.index, [WW])
          })))
        } else {
          const wW = this.node(zR, !1);
          this.nodeObjects.set(RW.index, wW);
          const AW = [];
          this.nodePrimitives.set(RW.index, AW);
          for (const RW of MW.primitives) CW.push(this.loadPrimitive(`${WW}/primitives/${RW.index}`, `${zR}_primitive${RW.index}`, RW, (WW => {
            WW.parent = wW, AW.push(WW)
          })))
        }
        const AW = this.nodeObjects.get(RW.index);
        return wW(AW), Promise.all(CW).then((() => AW))
      }
      loadPrimitive(WW, RW, MW, wW) {
        const CW = [],
          zR = this.node(RW, !0);
        if (zR.sideOrientation = this.LC.useRightHandedSystem ? AR.d.CounterClockWiseSideOrientation : AR.d.ClockWiseSideOrientation, CW.push(this.geometryData.load(WW, MW, zR).then((WW => {
            if ((0, qR.f)(zR)) {
              var RW, MW;
              const wW = WW;
              zR.replaceModel(wW, Int32Array.of(0, null !== (RW = null === (MW = wW.indexData) || void 0 === MW ? void 0 : MW.length) && void 0 !== RW ? RW : wW.vertexCount, 0, wW.vertexCount))
            } else this.create((() => (WW.applyToMesh(zR), WW)))
          }))), this.materials) {
          const WW = 0 === MW.mode ? AR.d.PointListDrawMode : AR.d.TriangleFillMode,
            RW = null === MW.material ? null : this.asset.model.materials[MW.material];
          CW.push(this.loadMaterial(RW, WW, (WW => {
            zR.material = WW
          })))
        }
        return eR(zR, WW), wW(zR), Promise.all(CW).then((() => zR))
      }
      loadMaterial(WW, RW, MW) {
        var wW;
        const CW = `${null!==(wW=null===WW||void 0===WW?void 0:WW.index)&&void 0!==wW?wW:"default"}:${RW}`;
        let zR = this.materialData.get(CW);
        return zR || (zR = this.createMaterial(WW, RW), this.materialData.set(CW, zR)), MW(zR.material), zR.promise
      }
      createMaterial(WW, RW) {
        const MW = WW ? WW.name || `material${WW.index}` : "__GLTFLoader._default",
          {
            style: wW,
            unlit: CW
          } = this.materials;
        let zR;
        const AW = this.create((() => {
          const AW = (0, NR.b)({
            name: MW,
            LC: this.LC,
            sets: {
              ...(0, ZW.e)(this.asset, WW, wW, CW),
              fillMode: RW
            },
            unrendered: !0
          });
          return zR = AW.model, AW.mirror
        }));
        let bR = Promise.resolve();
        if (WW) {
          const RW = `/materials/${WW.index}`,
            wW = zR.diffuseTexture;
          if (wW && !wW.mirror) bR = new Promise((WW => setTimeout(WW)));
          else if (wW) {
            const CW = wW.mirror;
            CW._parentContainer = this.container, CW.name = `${MW} (Base Color)`, eR(CW, `${RW}${WW.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(CW), bR = (0, bM.q)(wW)
          }
          BR(AW, WW.extras), eR(AW, RW)
        }
        return this.tree.materials.push(AW), {
          material: AW,
          promise: bR
        }
      }
    }

    function iM() {
      wR.f.dracoDecodes = gR.decodes, wR.f.dracoWorkersStarted = gR.workersStarted, wR.f.dracoMostWorkers = gR.mostWorkers
    }
    async function YR(WW, RW, MW, CW, zR) {
      try {
        return await async function(WW, RW, MW, CW, zR, AW) {
          var bR;
          let yR;
          const NW = null === (bR = (0, yM.e)()) || void 0 === bR ? void 0 : bR.AC,
            eW = null !== NW && void 0 !== NW && NW.bz && RW === NW.QRW() ? NW : null,
            BW = zR && !eW;
          return await HW(WW, RW, MW, CW, wW.e, (WW => (yR = new TR(RW, BW), new gM(WW, RW, yR, BW, new RR(RW, CW), AW, eW).load())), !zR), yR
        }(WW, RW, MW, IW, CW, zR)
      } finally {
        iM()
      }
    }
    async function JR(WW, RW, MW, CW) {
      try {
        return await HW(WW, RW, MW, IW, wW.e, (WW => CW(WW, new RR(RW, IW))))
      } finally {
        iM()
      }
    }
    MR = CW.b, NW || (NW = {
      scriptUrl: new URL(MR.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(MR.wasmBinaryUrl, location.href).href
    })
  },
  38975: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => AW
    });
    var wW = MW(151),
      CW = MW(1041);

    function zR(WW) {
      return (0, wW.e)() ? `https://${CW.c.discordDomain}/${WW.href}` : WW.href
    }
    const AW = {
      scriptUrl: zR(new MW.U(MW(38983))),
      wasmBinaryUrl: zR(new MW.U(MW(38986)))
    }
  },
  34585: WW => {
    WW.exports = function(WW, RW, MW, wW) {
      var CW = self || window;
      try {
        try {
          var zR;
          try {
            zR = new CW.Blob([WW])
          } catch (NW) {
            (zR = new(CW.BlobBuilder || CW.WebKitBlobBuilder || CW.MozBlobBuilder || CW.MSBlobBuilder)).append(WW), zR = zR.getBlob()
          }
          var AW = CW.URL || CW.webkitURL,
            bR = AW.createObjectURL(zR),
            yR = new CW[RW](bR, MW);
          return AW.revokeObjectURL(bR), yR
        } catch (NW) {
          return new CW[RW]("data:application/javascript,".concat(encodeURIComponent(WW)), MW)
        }
      } catch (NW) {
        if (!wW) throw Error("Inline worker is not supported");
        return new CW[RW](wW, MW)
      }
    }
  },
  38986: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  },
  38983: (WW, RW, MW) => {
    WW.exports = MW.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);
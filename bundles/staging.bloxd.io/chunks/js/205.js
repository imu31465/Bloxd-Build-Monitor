export const id = 205;
export const ids = [205];
export const modules = {
  41508: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      loadGlbAsset: () => PH,
      loadGlbTree: () => nH
    });
    var tS = gS(37933),
      bS = gS(41514),
      XS = gS(36265),
      xS = gS.n(XS);

    function NS() {
      return xS()('(()=>{class SS extends Error{}function HS(HS,gS){const tS=HS._malloc(gS);if(0===tS)throw new SS(`Draco: the decoder\'s heap refused ${gS} bytes`);return tS}function gS(SS){return{[SS.DT_FLOAT32]:[Float32Array,5126],[SS.DT_INT8]:[Int8Array,5120],[SS.DT_INT16]:[Int16Array,5122],[SS.DT_INT32]:[Int32Array,5124],[SS.DT_UINT8]:[Uint8Array,5121],[SS.DT_UINT16]:[Uint16Array,5123],[SS.DT_UINT32]:[Uint32Array,5125]}}function tS(HS,tS,bS,XS,xS){let NS=null,qS=null,uS=null;try{NS=new HS.Decoder,qS=new HS.DecoderBuffer,qS.Init(tS,tS.byteLength);let IS=0;const fS=NS.GetEncodedGeometryType(qS);if(fS===HS.TRIANGULAR_MESH){const gS=new HS.Mesh;uS=gS;const tS=NS.DecodeBufferToMesh(qS,gS);if(!tS.ok()||0===gS.ptr)throw new SS(tS.error_msg());IS=3*gS.num_faces()}else{if(fS!==HS.POINT_CLOUD)throw new SS(`Draco: Cannot decode invalid geometry type ${fS}`);{const gS=new HS.PointCloud;uS=gS;const tS=NS.DecodeBufferToPointCloud(qS,gS);if(!tS.ok()||!gS.ptr)throw new SS(tS.error_msg())}}const kS=uS.num_points();if(kS!==XS.vertices||IS!==XS.indices)throw new SS(`Draco: decoded ${kS} vertices and ${IS} indices, the accessors declare ${XS.vertices} and ${XS.indices}`);const aS=gS(HS),KS=[];for(const{kind:HS,id:gS,components:tS}of bS){const bS=NS.GetAttributeByUniqueId(uS,gS);if(!bS||0===bS.ptr)throw new SS(`Draco: no attribute with id ${gS} (${HS})`);const XS=bS.data_type();if(!aS[XS])throw new SS(`Draco: Cannot decode invalid data type ${XS}`);if(bS.num_components()!==tS)throw new SS(`Draco: ${HS} decodes to ${bS.num_components()} components, its accessor declares ${tS}`);KS.push([HS,bS,XS])}return xS({dracoDecoder:NS,geometry:uS,triangles:fS===HS.TRIANGULAR_MESH,numPoints:kS,numIndices:IS,attributes:KS})}finally{uS&&HS.destroy(uS),qS&&HS.destroy(qS),NS&&HS.destroy(NS)}}const bS=self;let XS=null;self.onmessage=SS=>{let{data:xS}=SS;if("init"===xS.id){try{importScripts(xS.url),XS=DracoDecoderModule({wasmBinary:xS.wasmBinary}),bS.postMessage({id:"initDone"})}catch(fS){bS.postMessage({id:"initError",message:fS instanceof Error?fS.message:String(fS)})}return}const{seq:NS,data:qS,attributeIds:uS,expected:IS}=xS;XS?XS.then((SS=>{try{const XS=function(SS,bS,XS,xS){const NS=Object.keys(XS).map((SS=>({kind:SS,id:XS[SS],components:xS.components[SS]})));return tS(SS,bS,NS,xS,(tS=>{let{dracoDecoder:bS,geometry:XS,triangles:xS,numPoints:NS,numIndices:qS,attributes:uS}=tS;const IS=gS(SS);let fS=null;if(xS){const gS=4*qS,tS=HS(SS,gS);try{bS.GetTrianglesUInt32Array(XS,gS,tS),fS=new Uint32Array(qS),fS.set(new Uint32Array(SS.HEAPF32.buffer,tS,qS))}finally{SS._free(tS)}}const kS=[];for(const[gS,aS,KS]of uS){const[tS]=IS[KS],xS=aS.num_components(),qS=NS*xS,uS=qS*tS.BYTES_PER_ELEMENT,fS=HS(SS,uS);try{bS.GetAttributeDataArrayForAllPoints(XS,aS,KS,uS,fS),kS.push({kind:gS,data:new tS(SS.HEAPF32.buffer,fS,qS).slice(),size:xS,byteOffset:aS.byte_offset(),byteStride:aS.byte_stride(),normalized:aS.normalized()})}finally{SS._free(fS)}}return{indices:fS,attributes:kS,totalVertices:NS}}))}(SS,qS,uS,IS),xS=XS.attributes.map((SS=>SS.data.buffer));XS.indices&&xS.push(XS.indices.buffer),bS.postMessage({id:"decoded",seq:NS,...XS},xS)}catch(fS){bS.postMessage({id:"decodeError",seq:NS,message:fS instanceof Error?fS.message:String(fS)})}}),(SS=>{bS.postMessage({id:"decodeError",seq:NS,message:SS instanceof Error?SS.message:String(SS)})})):bS.postMessage({id:"decodeError",seq:NS,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, gS.p + "dracoDecode.worker.09b801c2.worker.js")
    }
    var qS = gS(104);
    const uS = 1e3;
    let IS = null,
      fS = null;
    const kS = [],
      aS = [];
    let KS = 0;
    const jS = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      GS = function(SS, HS) {
        const gS = SS ? Math.max(1, Math.min(Math.floor(.5 * SS), 4)) : 1;
        return HS ? Math.min(gS, 2) : gS
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, qS.isMobile)());

    function CS() {
      if (!IS) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: SS,
        wasmBinaryUrl: HS
      } = IS;
      return fS ??= fetch(HS).then((SS => {
        if (!SS.ok) throw new Error(`Draco: fetching ${HS} failed: ${SS.status}`);
        return SS.arrayBuffer()
      })), fS.catch((() => {
        fS = null
      })), jS.workersStarted++, fS.then((HS => new Promise(((gS, tS) => {
        const bS = new NS;
        bS.onerror = SS => {
          bS.onmessage = null, bS.onerror = null, bS.terminate(), tS(new Error("Draco: the decode worker failed to start" + (SS.message ? `: ${SS.message}` : " (its script did not load)")))
        }, bS.onmessage = SS => {
          let {
            data: HS
          } = SS;
          bS.onmessage = null, bS.onerror = null, "initDone" === HS.id ? gS(bS) : (bS.terminate(), tS(new Error(`Draco: ${"initError"===HS.id?HS.message:"the worker did not start"}`)))
        };
        const XS = HS.slice(0),
          xS = {
            id: "init",
            url: SS,
            wasmBinary: XS
          };
        bS.postMessage(xS, [XS])
      }))))
    }

    function nS(SS) {
      const HS = kS.indexOf(SS); - 1 !== HS && kS.splice(HS, 1);
      const gS = aS.shift();
      gS && QS(gS)
    }

    function PS(SS, HS) {
      SS.busy = !0, SS.releaseTimer && (clearTimeout(SS.releaseTimer), SS.releaseTimer = null);
      SS.worker.then((gS => {
        const tS = KS++;
        gS.onmessage = bS => {
          let {
            data: XS
          } = bS;
          if (("decoded" === XS.id || "decodeError" === XS.id) && XS.seq === tS) {
            if (gS.onmessage = null, gS.onerror = null, "decoded" === XS.id) return jS.decodes++, HS.resolve({
              indices: XS.indices,
              attributes: XS.attributes,
              totalVertices: XS.totalVertices
            }), void(() => {
              const HS = aS.shift();
              HS ? PS(SS, HS) : (SS.busy = !1, SS.releaseTimer = setTimeout((() => {
                const HS = kS.indexOf(SS); - 1 !== HS && kS.splice(HS, 1), SS.worker.then((SS => {
                  SS.terminate()
                }))
              }), uS))
            })();
            gS.terminate(), HS.reject(new Error(XS.message)), nS(SS)
          }
        }, gS.onerror = tS => {
          gS.onmessage = null, gS.onerror = null, gS.terminate(), HS.reject(new Error(`Draco: the decode worker failed: ${tS.message}`)), nS(SS)
        };
        const bS = {
          id: "decode",
          seq: tS,
          data: HS.data,
          attributeIds: HS.attributeIds,
          expected: HS.expected
        };
        gS.postMessage(bS, [HS.data.buffer])
      }), (gS => {
        HS.reject(gS instanceof Error ? gS : new Error(String(gS))), nS(SS)
      }))
    }

    function QS(SS) {
      const HS = kS.find((SS => !SS.busy));
      if (HS) PS(HS, SS);
      else {
        if (kS.length < GS) {
          const HS = {
            worker: CS(),
            busy: !0,
            releaseTimer: null
          };
          return kS.push(HS), jS.mostWorkers = Math.max(jS.mostWorkers, kS.length), void PS(HS, SS)
        }
        aS.push(SS)
      }
    }

    function DS(SS, HS, gS) {
      return new Promise(((tS, bS) => {
        QS({
          data: new Int8Array(SS.buffer, SS.byteOffset, SS.byteLength).slice(),
          attributeIds: HS,
          expected: gS,
          resolve: tS,
          reject: bS
        })
      }))
    }
    var wS = gS(37492),
      hS = gS(37505),
      ZS = gS(34310),
      JS = gS(34308);
    const OS = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function dS(SS) {
      const HS = (0, JS.l)(SS.byteLength);
      if (HS) throw new ZS.k(HS);
      const {
        json: gS,
        bin: tS
      } = (0, ZS.v)(SS), bS = (0, JS.h)(gS, tS);
      if (bS) throw new ZS.k(bS);
      try {
        return function(SS, HS) {
          var gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS;
          const CS = new Map,
            nS = gS => {
              let tS = CS.get(gS);
              if (!tS) {
                var bS;
                const XS = SS.bufferViews[gS],
                  xS = null !== (bS = XS.byteOffset) && void 0 !== bS ? bS : 0;
                tS = {
                  index: gS,
                  bytes: HS.subarray(xS, xS + XS.byteLength),
                  byteStride: XS.byteStride
                }, CS.set(gS, tS)
              }
              return tS
            },
            PS = new Map,
            QS = HS => {
              let gS = PS.get(HS);
              if (!gS) {
                var tS;
                const bS = SS.accessors[HS];
                gS = {
                  index: HS,
                  count: bS.count,
                  type: bS.type,
                  numComponents: ZS.m[bS.type],
                  componentType: bS.componentType,
                  normalized: null !== (tS = bS.normalized) && void 0 !== tS && tS,
                  byteOffset: bS.byteOffset,
                  bufferView: void 0 === bS.bufferView ? null : nS(bS.bufferView),
                  min: bS.min,
                  max: bS.max
                }, PS.set(HS, gS)
              }
              return gS
            },
            DS = null !== (gS = null === (tS = SS.extensionsUsed) || void 0 === tS ? void 0 : tS.includes("KHR_draco_mesh_compression")) && void 0 !== gS && gS,
            wS = (null !== (bS = SS.meshes) && void 0 !== bS ? bS : []).map(((HS, gS) => {
              const tS = HS.primitives.map(((HS, gS) => {
                var tS, bS, XS;
                const xS = DS ? null === (tS = HS.extensions) || void 0 === tS ? void 0 : tS.KHR_draco_mesh_compression : void 0;
                let NS = null;
                const qS = [];
                if (xS) {
                  const gS = {
                    vertices: SS.accessors[HS.attributes.POSITION].count,
                    indices: void 0 === HS.indices ? 0 : SS.accessors[HS.indices].count,
                    components: {}
                  };
                  NS = {
                    bufferView: nS(xS.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: gS
                  };
                  for (const [tS, bS] of ZS.h) {
                    const XS = xS.attributes[tS];
                    if (void 0 === XS) continue;
                    NS.attributeIds[bS] = XS;
                    const qS = HS.attributes[tS];
                    var uS;
                    if (void 0 !== qS) NS.normalized[bS] = null !== (uS = SS.accessors[qS].normalized) && void 0 !== uS && uS, gS.components[bS] = ZS.m[SS.accessors[qS].type]
                  }
                } else
                  for (const [SS, IS] of ZS.h) {
                    const gS = HS.attributes[SS];
                    void 0 !== gS && qS.push({
                      semantic: SS,
                      kind: IS,
                      accessor: QS(gS)
                    })
                  }
                return {
                  index: gS,
                  mode: null !== (bS = HS.mode) && void 0 !== bS ? bS : 4,
                  attributes: qS,
                  indices: xS || void 0 === HS.indices ? null : QS(HS.indices),
                  position: void 0 === HS.attributes.POSITION ? null : QS(HS.attributes.POSITION),
                  material: null !== (XS = HS.material) && void 0 !== XS ? XS : null,
                  draco: NS
                }
              }));
              return {
                index: gS,
                name: HS.name,
                primitives: tS,
                extras: HS.extras
              }
            })),
            hS = (null !== (XS = SS.nodes) && void 0 !== XS ? XS : []).map(((SS, HS) => {
              var gS, tS;
              return {
                index: HS,
                name: SS.name,
                children: null !== (gS = SS.children) && void 0 !== gS ? gS : [],
                mesh: null !== (tS = SS.mesh) && void 0 !== tS ? tS : null,
                translation: SS.translation,
                rotation: SS.rotation,
                scale: SS.scale,
                hasCamera: void 0 !== SS.camera,
                extras: SS.extras
              }
            })),
            JS = null !== (xS = null === (NS = SS.extensionsUsed) || void 0 === NS ? void 0 : NS.includes("KHR_materials_unlit")) && void 0 !== xS && xS,
            dS = null !== (qS = null === (uS = SS.extensionsUsed) || void 0 === uS ? void 0 : uS.includes("KHR_texture_transform")) && void 0 !== qS && qS,
            cS = (null !== (IS = SS.materials) && void 0 !== IS ? IS : []).map(((SS, HS) => {
              var gS, tS, bS, XS;
              const xS = SS.pbrMetallicRoughness,
                NS = null === xS || void 0 === xS ? void 0 : xS.baseColorTexture;
              return {
                index: HS,
                name: SS.name,
                extras: SS.extras,
                unlit: JS && void 0 !== (null === (gS = SS.extensions) || void 0 === gS ? void 0 : gS.KHR_materials_unlit),
                pbr: xS ? {
                  baseColorFactor: xS.baseColorFactor,
                  metallicFactor: xS.metallicFactor,
                  roughnessFactor: xS.roughnessFactor
                } : null,
                baseColorTexture: NS ? {
                  texture: NS.index,
                  transform: dS && (null === (tS = NS.extensions) || void 0 === tS ? void 0 : tS.KHR_texture_transform) || null
                } : null,
                emissiveFactor: SS.emissiveFactor,
                alphaMode: null !== (bS = SS.alphaMode) && void 0 !== bS ? bS : "OPAQUE",
                alphaCutoff: SS.alphaCutoff,
                doubleSided: null !== (XS = SS.doubleSided) && void 0 !== XS && XS
              }
            })),
            vS = (null !== (fS = SS.textures) && void 0 !== fS ? fS : []).map(((HS, gS) => {
              var tS, bS;
              const XS = void 0 === HS.sampler ? OS : {
                index: HS.sampler,
                ...null === (tS = SS.samplers) || void 0 === tS ? void 0 : tS[HS.sampler]
              };
              return {
                index: gS,
                sampler: {
                  index: XS.index,
                  magFilter: XS.magFilter,
                  minFilter: XS.minFilter,
                  wrapS: XS.wrapS,
                  wrapT: XS.wrapT
                },
                image: null !== (bS = HS.source) && void 0 !== bS ? bS : -1
              }
            })),
            ES = (null !== (kS = SS.images) && void 0 !== kS ? kS : []).map(((SS, HS) => ({
              index: HS,
              name: SS.name,
              mimeType: SS.mimeType,
              bufferView: nS(SS.bufferView)
            }))),
            LS = null !== (aS = (0, ZS.r)(SS)) && void 0 !== aS ? aS : 0;
          return {
            json: SS,
            rootNodes: null !== (KS = null === (jS = SS.scenes) || void 0 === jS || null === (GS = jS[LS]) || void 0 === GS ? void 0 : GS.nodes) && void 0 !== KS ? KS : [],
            nodes: hS,
            meshes: wS,
            materials: cS,
            textures: vS,
            images: ES
          }
        }(gS, tS)
      } catch (XS) {
        throw XS instanceof ZS.j ? XS : new ZS.j(`reading the GLB failed: ${XS instanceof Error?XS.message:String(XS)}`)
      }
    }
    async function cS(SS, HS) {
      var gS, tS;
      const bS = SS.draco;
      if (!bS) throw new ZS.j("not a Draco primitive");
      let XS;
      try {
        XS = await HS(bS.bufferView.bytes, bS.attributeIds, bS.expected)
      } catch (uS) {
        throw new ZS.j(`Draco decoding failed: ${uS instanceof Error?uS.message:String(uS)}`)
      }
      const {
        vertices: xS,
        indices: NS,
        components: qS
      } = bS.expected;
      if (XS.totalVertices !== xS || (null !== (gS = null === (tS = XS.indices) || void 0 === tS ? void 0 : tS.length) && void 0 !== gS ? gS : 0) !== NS || XS.attributes.some((SS => SS.size !== qS[SS.kind] || SS.data.length !== xS * SS.size))) throw new ZS.j("Draco decoding gave other counts than the accessors declare");
      for (const IS of XS.attributes) {
        const SS = bS.normalized[IS.kind];
        void 0 !== SS && (IS.normalized = SS)
      }
      return XS
    }
    const vS = new WeakMap;

    function ES(SS, HS) {
      var gS;
      const tS = null !== (gS = vS.get(SS)) && void 0 !== gS ? gS : HS(SS);
      return vS.set(SS, tS), tS
    }

    function LS(SS) {
      const HS = SS.bufferView,
        gS = 5125 === SS.componentType ? Uint32Array : Uint16Array,
        tS = HS.bytes.buffer,
        bS = HS.bytes.byteOffset + (SS.byteOffset || 0);
      return bS % gS.BYTES_PER_ELEMENT !== 0 ? new gS(tS.slice(bS, bS + SS.count * gS.BYTES_PER_ELEMENT), 0) : new gS(tS, bS, SS.count)
    }

    function YS(SS, HS) {
      if (SS.min && SS.max) return [new Float64Array(SS.min), new Float64Array(SS.max)];
      const gS = HS.find((SS => {
          let {
            kind: HS
          } = SS;
          return "position" === HS
        })),
        tS = gS ? (0, hS.k)(gS, SS.count) : new Float32Array(0);
      return (0, hS.t)(tS.length / 3, ((SS, HS) => tS[3 * SS + HS]))
    }

    function AS(SS) {
      const HS = SS.attributes.map((SS => {
          var HS, gS;
          let {
            kind: tS,
            accessor: bS
          } = SS;
          const {
            bufferView: XS,
            numComponents: xS
          } = bS;
          if (!XS) {
            return {
              kind: tS,
              data: ES(bS, (() => new Float32Array(xS * bS.count))),
              offset: 0,
              stride: 4 * xS,
              components: xS,
              glType: 5126,
              isNormalized: !1
            }
          }
          const NS = null !== (HS = XS.byteStride) && void 0 !== HS ? HS : xS * ZS.c[bS.componentType];
          return {
            kind: tS,
            data: XS.bytes,
            offset: null !== (gS = bS.byteOffset) && void 0 !== gS ? gS : 0,
            stride: NS,
            components: xS,
            glType: bS.componentType,
            isNormalized: bS.normalized
          }
        })),
        gS = SS.indices,
        tS = gS && ES(gS, LS),
        bS = SS.position;
      return new hS.g(HS, tS, bS.count, ...YS(bS, HS))
    }
    const yS = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function VS(SS, HS) {
      const gS = HS.attributes.map((SS => {
        let {
          kind: HS,
          data: gS,
          size: tS,
          byteOffset: bS,
          byteStride: XS,
          normalized: xS
        } = SS;
        return {
          kind: HS,
          data: gS,
          offset: bS,
          stride: XS,
          components: tS,
          glType: 5120 + yS.indexOf(gS.constructor),
          isNormalized: xS
        }
      }));
      return new hS.g(gS, HS.indices, HS.totalVertices, ...YS(SS.position, gS))
    }

    function iS(SS) {
      const HS = SS.lastIndexOf("/");
      return HS < 0 ? SS : SS.substring(HS + 1)
    }

    function WS(SS) {
      const HS = SS.lastIndexOf("/");
      return HS < 0 ? "" : SS.substring(0, HS + 1)
    }

    function zS(SS) {
      return SS.name || `node${SS.index}`
    }
    const US = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      pS = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      sS = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function BS(SS) {
      var HS, gS, tS, bS;
      const XS = null !== (HS = SS.minFilter) && void 0 !== HS ? HS : 9987;
      return 9729 === (null !== (gS = SS.magFilter) && void 0 !== gS ? gS : 9729) ? null !== (tS = pS[XS]) && void 0 !== tS ? tS : 3 : null !== (bS = sS[XS]) && void 0 !== bS ? bS : 4
    }
    const MS = {
      33071: 0,
      33648: 2
    };

    function FS(SS) {
      var HS;
      return null !== (HS = MS[null !== SS && void 0 !== SS ? SS : 10497]) && void 0 !== HS ? HS : 1
    }

    function RS(SS) {
      return 9728 === SS.minFilter || 9729 === SS.minFilter
    }

    function TS(SS) {
      var HS, gS, tS;
      const bS = Float64Array.from(null !== (HS = SS.scale) && void 0 !== HS ? HS : [1, 1, 1]);
      return SS.hasCamera && (bS[0] = -1), {
        translation: Float64Array.from(null !== (gS = SS.translation) && void 0 !== gS ? gS : [0, 0, 0]),
        rotation: Float64Array.from(null !== (tS = SS.rotation) && void 0 !== tS ? tS : [0, 0, 0, 1]),
        scale: bS
      }
    }

    function oS(SS, HS) {
      let {
        translation: gS,
        rotation: tS,
        scale: bS
      } = SS;
      const XS = new Float32Array(16);
      return (0, wS.d)(bS, 0, tS, 0, gS, 0, XS), HS && (0, wS.o)(XS, HS, 0, XS), XS
    }
    class lS {
      constructor(SS, HS, gS, tS) {
        this.model = SS, this.decode = HS, this.fileInfo = gS, this.uniqueRootUrl = tS, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const bS = new Set,
          XS = (HS, gS) => {
            const tS = SS.nodes[HS];
            if (this.parents.has(tS)) throw new ZS.j(`/nodes/${HS}: Invalid recursive node hierarchy`);
            this.parents.set(tS, gS);
            const xS = null === tS.mesh ? [] : SS.meshes[tS.mesh].primitives,
              NS = xS.map((SS => {
                const HS = xS.length > 1;
                return {
                  name: HS ? `${zS(tS)}_primitive${SS.index}` : zS(tS),
                  node: tS,
                  primitive: SS,
                  part: HS,
                  geometry: null
                }
              }));
            this.uses.set(tS, NS);
            const qS = null !== tS.mesh && bS.has(tS.mesh);
            bS.add(tS.mesh), this.own.set(tS, qS ? [] : NS);
            for (const SS of tS.children) XS(SS, tS)
          };
        for (const xS of SS.rootNodes) XS(xS, null);
        this.primitives = SS.nodes.flatMap((SS => {
          var HS;
          return null !== (HS = this.own.get(SS)) && void 0 !== HS ? HS : []
        }))
      }
      decodeGeometries() {
        const SS = new Map;
        return Promise.all(this.primitives.map((async HS => {
          const {
            primitive: gS
          } = HS, tS = gS.draco;
          let bS = tS ? SS.get(tS.bufferView.index) : Promise.resolve(AS(gS));
          bS || (bS = cS(gS, this.decode).then((SS => VS(gS, SS))), SS.set(tS.bufferView.index, bS)), HS.geometry = await bS
        })))
      }
      parentOf(SS) {
        var HS;
        return null !== (HS = this.parents.get(SS)) && void 0 !== HS ? HS : null
      }
      meshesUnder(SS) {
        const HS = this.model.nodes.filter((SS => this.uses.has(SS)));
        for (const tS of HS) {
          const HS = this.uses.get(tS),
            gS = HS.find((HS => HS.name === SS));
          if (gS) return 1 === HS.length ? this.subtree(tS) : this.own.get(tS).includes(gS) ? [gS] : []
        }
        const gS = HS.find((HS => 1 !== this.uses.get(HS).length && zS(HS) === SS));
        return gS ? this.subtree(gS) : null
      }
      subtree(SS) {
        return [...this.own.get(SS), ...SS.children.flatMap((SS => this.subtree(this.model.nodes[SS])))]
      }
      worldMatrix(SS, HS, gS) {
        let tS = oS(TS(HS ? US : {}), null);
        const bS = [];
        for (let xS = SS.part ? SS.node : this.parentOf(SS.node); xS; xS = this.parentOf(xS)) bS.unshift(xS);
        for (const xS of bS) tS = oS(TS(xS), tS);
        const XS = TS(SS.part ? {} : SS.node);
        return void 0 !== gS && XS.scale.fill(gS), oS(XS, tS)
      }
      floats(SS) {
        const {
          vertexAttributes: HS,
          vertexCount: gS
        } = SS.geometry;
        return new Map(HS.map((SS => [SS.kind, (0, hS.k)(SS, gS)])))
      }
      imageUrl(SS) {
        return function(SS, HS, gS) {
          let {
            name: tS
          } = HS;
          return `data:${SS}${tS}#image${gS}`
        }(this.uniqueRootUrl, this.fileInfo, SS)
      }
      textureDesc(SS, HS) {
        var gS;
        let {
          texture: tS,
          transform: bS
        } = SS;
        const {
          sampler: XS,
          image: xS
        } = this.model.textures[tS], {
          bufferView: NS,
          mimeType: qS,
          name: uS
        } = this.model.images[xS], IS = bS && {
          ...bS.offset ? {
            uOffset: bS.offset[0],
            vOffset: bS.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...bS.rotation ? {
            wAng: -bS.rotation
          } : {},
          ...bS.scale ? {
            uScale: bS.scale[0],
            vScale: bS.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(xS),
          noMipmap: RS(XS),
          invertY: !1,
          samplingMode: BS(XS),
          data: {
            bytes: NS.bytes,
            mimeType: qS,
            label: uS,
            context: `/textures/${tS}`
          },
          sets: {
            wrapU: FS(XS.wrapS),
            wrapV: FS(XS.wrapT),
            ...IS,
            coordinatesIndex: null !== (gS = null === bS || void 0 === bS ? void 0 : bS.texCoord) && void 0 !== gS ? gS : 0,
            hasAlpha: HS
          }
        }
      }
    }
    async function mS(SS, HS, gS, tS, bS, XS) {
      let xS = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const NS = function(SS, HS, gS) {
          return "string" !== typeof HS ? {
            url: "",
            rootUrl: SS,
            name: gS()
          } : HS ? HS.startsWith("data:") ? {
            url: HS,
            rootUrl: SS,
            name: ""
          } : SS ? {
            url: SS + HS,
            rootUrl: SS,
            name: HS
          } : {
            url: HS,
            rootUrl: WS(HS),
            name: iS(HS)
          } : {
            url: SS,
            rootUrl: WS(SS),
            name: iS(SS)
          }
        }(gS, SS, bS),
        qS = {};
      HS.addPendingData(qS);
      try {
        const gS = dS(await async function(SS, HS) {
            return "string" !== typeof HS ? HS : SS.url.startsWith("data:") ? (0, ZS.n)(SS.url) : await (0, ZS.q)(SS.url)
          }(NS, SS)),
          qS = new lS(gS, tS, NS, function(SS, HS) {
            let {
              rootUrl: gS,
              name: tS
            } = SS;
            return !gS.startsWith("file:") && tS ? gS : `${gS}${HS()}/`
          }(NS, bS));
        return await XS(qS), HS.importedMeshesFiles && (HS.loadingPluginName = "wL", xS && HS.importedMeshesFiles.push(NS.url)), qS
      } finally {
        HS.removePendingData(qS)
      }
    }
    var eS = gS(37615),
      rS = gS(37471),
      SH = gS(37917);

    function HH(SS) {
      if (null === SS || void 0 === SS || !SS.min || !SS.max) return null;
      const [HS, gS, tS] = SS.min, [bS, XS, xS] = SS.max, {
        BoundingInfo: NS,
        VK: qS
      } = (0, eS.b)();
      return new NS(new qS(HS, gS, tS), new qS(bS, XS, xS))
    }

    function gH(SS) {
      (0, rS.i)(SS) || (SS.geometry && SS.geometry.useBoundingInfoFromGeometry ? SS._updateBoundingInfo() : SS.refreshBoundingInfo(!0, !0))
    }
    class tH {
      constructor(SS, HS) {
        this.Bj = SS, this.decode = HS, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(SS) {
        let HS = this.viewData.get(SS.index);
        return HS || (HS = this.bufferData.then((() => SS.bytes)), this.viewData.set(SS.index, HS)), HS
      }
      viewBuffer(SS) {
        let HS = this.viewBuffers.get(SS.index);
        return HS || (HS = this.viewBytes(SS).then((SS => new((0, eS.b)().CK)(this.Bj.AK(), SS, !1))), this.viewBuffers.set(SS.index, HS)), HS
      }
      vertexBuffer(SS, HS) {
        const {
          kind: gS,
          data: tS
        } = HS, bS = `${SS.index}:${gS}`;
        let XS = this.vertexBuffers.get(bS);
        if (!XS) {
          const xS = SS.bufferView;
          XS = xS ? this.viewBuffer(xS).then((SS => this.layoutVertexBuffer(SS, HS))) : Promise.resolve(tS).then((SS => new((0, eS.b)().VertexBuffer)(this.Bj.AK(), SS, gS, !1))), this.vertexBuffers.set(bS, XS)
        }
        return XS
      }
      layoutVertexBuffer(SS, HS) {
        let {
          kind: gS,
          offset: tS,
          stride: bS,
          components: XS,
          glType: xS,
          isNormalized: NS
        } = HS;
        const qS = this.Bj.AK();
        return new((0, eS.b)().VertexBuffer)(qS, SS, gS, !1, void 0, bS, void 0, tS, XS, xS, NS, !0, void 0, !0)
      }
      load(SS, HS, gS) {
        const tS = (0, rS.i)(gS),
          bS = SS => {
            tS || (gS._delayInfo = gS._delayInfo || [], -1 === gS._delayInfo.indexOf(SS) && gS._delayInfo.push(SS))
          },
          XS = HS.draco;
        if (XS) {
          for (const SS in XS.attributeIds) bS(SS);
          let xS = this.dracoGeometry.get(XS.bufferView.index);
          return xS || (xS = this.viewBytes(XS.bufferView).then((async () => {
            let bS;
            try {
              bS = await cS(HS, this.decode)
            } catch (qS) {
              throw new ZS.j(`${SS}: ${qS instanceof Error?qS.message:String(qS)}`)
            }
            const XS = VS(HS, bS);
            if (tS) return XS;
            const xS = HH(HS.position),
              NS = new((0, eS.b)().MirroredGeometry)(gS.name, this.Bj);
            xS && (NS._boundingInfo = xS, NS.useBoundingInfoFromGeometry = !0), XS.indexData && NS.setIndices(XS.indexData);
            for (const SS of XS.vertexAttributes) NS.setVerticesBuffer(this.layoutVertexBuffer(SS.data, SS), XS.vertexCount);
            return NS.link(XS), NS
          })), this.dracoGeometry.set(XS.bufferView.index, xS)), xS
        }
        const xS = [],
          NS = AS(HS);
        if (tS) return gS.isUnIndexed = !NS.indexData, gS.hasVertexAlpha = (0, SH.e)(HS), Promise.resolve(NS);
        const qS = new((0, eS.b)().MirroredGeometry)(gS.name, this.Bj),
          {
            indexData: uS
          } = NS;
        uS ? xS.push(this.viewBytes(HS.indices.bufferView).then((() => {
          qS.setIndices(uS)
        }))) : gS.isUnIndexed = !0;
        for (const [IS, {
            kind: fS,
            accessor: kS
          }] of HS.attributes.entries()) bS(fS), xS.push(this.vertexBuffer(kS, NS.vertexAttributes[IS]).then((SS => {
          if ("position" === SS.getKind()) {
            const SS = HH(kS);
            SS && (qS._boundingInfo = SS, qS.useBoundingInfoFromGeometry = !0)
          }
          qS.setVerticesBuffer(SS, NS.vertexCount)
        })));
        return (0, SH.e)(HS) && (gS.hasVertexAlpha = !0), Promise.all(xS).then((() => (qS.link(NS), qS)))
      }
    }
    var bH, XH = gS(37348),
      xH = gS(37113),
      NH = gS(37928),
      qH = gS(37286),
      uH = gS(37335),
      IH = gS(2910),
      fH = gS(37322);

    function kH(SS, HS) {
      SS.metadata = SS.metadata || {};
      const gS = SS._internalMetadata = SS._internalMetadata || {},
        tS = gS.wL = gS.wL || {};
      (tS.pointers = tS.pointers || []).push(HS)
    }

    function aH(SS, HS) {
      if (HS && Object.keys(HS).length > 0) {
        const gS = SS.metadata = SS.metadata || {};
        (gS.wL = gS.wL || {}).extras = HS
      }
    }

    function KH(SS, HS) {
      HS.position = SS.translation ? xH.VK.FromArray(SS.translation) : xH.VK.Zero(), HS.rotationQuaternion = SS.rotation ? xH.Quaternion.FromArray(SS.rotation) : xH.Quaternion.Identity(), HS.nf = SS.scale ? xH.VK.FromArray(SS.scale) : xH.VK.One()
    }
    class jH {
      constructor(SS, HS) {
        if (this.Bj = SS, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, HS) {
          const HS = SS.AK(),
            gS = SS.bY.add((() => {
              this.dispose()
            })),
            tS = HS.YK.add((() => {
              for (const SS of [...this.geometries, ...this.meshes, ...this.textures]) SS._rebuild()
            }));
          this.release = () => {
            SS.bY.remove(gS), HS.YK.remove(tS)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const SS of this.meshes) this.Bj.egS(SS);
          for (const SS of this.materials) this.Bj.addMaterial(SS);
          for (const SS of this.geometries) this.Bj.addGeometry(SS);
          for (const SS of this.transformNodes) this.Bj.addTransformNode(SS);
          for (const SS of this.textures) this.Bj.addTexture(SS)
        }
      }
      dispose() {
        var SS;
        for (const HS of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const SS of HS.slice()) SS.dispose();
          HS.length = 0
        }
        null === (SS = this.release) || void 0 === SS || SS.call(this), this.release = null
      }
    }
    class GH {
      constructor(SS, HS, gS, tS, bS, XS, xS) {
        this.asset = SS, this.Bj = HS, this.tree = gS, this.geometryData = bS, this.materials = XS, this.lite = xS, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = tS ? gS : null
      }
      create(SS) {
        if (this.lite) return SS();
        const HS = this.Bj;
        HS._blockEntityCollection = !!this.container;
        try {
          const HS = SS();
          return this.container && (HS._parentContainer = this.container), HS
        } finally {
          HS._blockEntityCollection = !1
        }
      }
      node(SS, HS) {
        return this.create((() => this.lite ? HS ? (0, NH.c)(this.lite, SS) : (0, NH.n)(this.lite, SS) : HS ? new((0, eS.b)().Mesh)(SS, this.Bj) : new((0, eS.b)().TransformNode)(SS, this.Bj)))
      }
      async load() {
        var SS;
        this.asset.model.json.nodes && this.createRoot();
        const HS = this.lite ? null : this.Bj,
          gS = null !== (SS = null === HS || void 0 === HS ? void 0 : HS.blockMaterialDirtyMechanism) && void 0 !== SS && SS;
        let tS;
        HS && (HS.blockMaterialDirtyMechanism = !0);
        try {
          tS = this.loadScene()
        } finally {
          null === HS || void 0 === HS || HS._forceBlockMaterialDirtyMechanism(gS)
        }
        await tS;
        const {
          root: bS,
          tree: XS
        } = this;
        bS && (bS.MJ(!0), XS.meshes.push(bS), XS.rootNodes.push(bS));
        for (const NS of this.asset.model.nodes) {
          const SS = this.nodeObjects.get(NS.index);
          SS && ["TransformNode", "LiteNode"].includes(SS.getClassName()) && XS.transformNodes.push(SS);
          for (const HS of null !== (xS = this.nodePrimitives.get(NS.index)) && void 0 !== xS ? xS : []) {
            var xS;
            XS.meshes.push(HS);
            const SS = HS.geometry;
            SS && !XS.geometries.includes(SS) && XS.geometries.push(SS)
          }
        }
      }
      createRoot() {
        const SS = this.node("__root__", !0);
        this.root = SS, SS.MJ(!1), this.Bj.useRightHandedSystem || KH(US, SS)
      }
      loadScene() {
        const SS = [];
        for (const HS of this.asset.model.rootNodes) SS.push(this.loadNode(this.asset.model.nodes[HS], (SS => {
          SS.parent = this.root
        })));
        return SS.push(Promise.resolve()), Promise.all(SS).then((() => {}))
      }
      loadNode(SS, HS) {
        const gS = `/nodes/${SS.index}`,
          tS = [],
          bS = bS => {
            if (kH(bS, gS), KH(SS, bS), SS.hasCamera && !this.Bj.useRightHandedSystem) {
              const {
                nf: SS
              } = bS;
              SS.set(-1, SS.y, SS.z)
            }
            for (const HS of SS.children) tS.push(this.loadNode(this.asset.model.nodes[HS], (SS => {
              SS.parent = bS
            })));
            (gS => {
              aH(gS, SS.extras), HS(gS)
            })(bS)
          };
        if (null === SS.mesh) {
          const HS = this.node(zS(SS), !1);
          this.nodeObjects.set(SS.index, HS), bS(HS)
        } else {
          const HS = this.asset.model.meshes[SS.mesh];
          tS.push(this.loadMesh(`/meshes/${HS.index}`, SS, HS, bS))
        }
        return Promise.all(tS).then((() => {
          for (const gS of null !== (HS = this.nodePrimitives.get(SS.index)) && void 0 !== HS ? HS : []) {
            var HS;
            gH(gS)
          }
          return this.nodeObjects.get(SS.index)
        }))
      }
      loadMesh(SS, HS, gS, tS) {
        const bS = [],
          XS = zS(HS);
        if (1 === gS.primitives.length) {
          const tS = gS.primitives[0];
          bS.push(this.loadPrimitive(`${SS}/primitives/${tS.index}`, XS, tS, (SS => {
            this.nodeObjects.set(HS.index, SS), this.nodePrimitives.set(HS.index, [SS])
          })))
        } else {
          const tS = this.node(XS, !1);
          this.nodeObjects.set(HS.index, tS);
          const xS = [];
          this.nodePrimitives.set(HS.index, xS);
          for (const HS of gS.primitives) bS.push(this.loadPrimitive(`${SS}/primitives/${HS.index}`, `${XS}_primitive${HS.index}`, HS, (SS => {
            SS.parent = tS, xS.push(SS)
          })))
        }
        const xS = this.nodeObjects.get(HS.index);
        return tS(xS), Promise.all(bS).then((() => xS))
      }
      loadPrimitive(SS, HS, gS, tS) {
        const bS = [],
          XS = this.node(HS, !0);
        if (XS.sideOrientation = this.Bj.useRightHandedSystem ? qH.d.CounterClockWiseSideOrientation : qH.d.ClockWiseSideOrientation, bS.push(this.geometryData.load(SS, gS, XS).then((SS => {
            if ((0, rS.i)(XS)) {
              var HS, gS;
              const tS = SS;
              XS.replaceModel(tS, Int32Array.of(0, null !== (HS = null === (gS = tS.indexData) || void 0 === gS ? void 0 : gS.length) && void 0 !== HS ? HS : tS.vertexCount, 0, tS.vertexCount))
            } else this.create((() => (SS.applyToMesh(XS), SS)))
          }))), this.materials) {
          const SS = 0 === gS.mode ? qH.d.PointListDrawMode : qH.d.TriangleFillMode,
            HS = null === gS.material ? null : this.asset.model.materials[gS.material];
          bS.push(this.loadMaterial(HS, SS, (SS => {
            XS.material = SS
          })))
        }
        return kH(XS, SS), tS(XS), Promise.all(bS).then((() => XS))
      }
      loadMaterial(SS, HS, gS) {
        var tS;
        const bS = `${null!==(tS=null===SS||void 0===SS?void 0:SS.index)&&void 0!==tS?tS:"default"}:${HS}`;
        let XS = this.materialData.get(bS);
        return XS || (XS = this.createMaterial(SS, HS), this.materialData.set(bS, XS)), gS(XS.material), XS.promise
      }
      createMaterial(SS, HS) {
        const gS = SS ? SS.name || `material${SS.index}` : "__GLTFLoader._default",
          {
            style: tS,
            unlit: bS
          } = this.materials;
        let XS;
        const xS = this.create((() => {
          const xS = (0, fH.e)({
            name: gS,
            Bj: this.Bj,
            sets: {
              ...(0, SH.d)(this.asset, SS, tS, bS),
              fillMode: HS
            },
            unrendered: !0
          });
          return XS = xS.model, xS.mirror
        }));
        let NS = Promise.resolve();
        if (SS) {
          const HS = `/materials/${SS.index}`,
            tS = XS.diffuseTexture;
          if (tS && !tS.mirror) NS = new Promise((SS => setTimeout(SS)));
          else if (tS) {
            const bS = tS.mirror;
            bS._parentContainer = this.container, bS.name = `${gS} (Base Color)`, kH(bS, `${HS}${SS.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(bS), NS = (0, uH.u)(tS)
          }
          aH(xS, SS.extras), kH(xS, HS)
        }
        return this.tree.materials.push(xS), {
          material: xS,
          promise: NS
        }
      }
    }

    function CH() {
      XH.e.dracoDecodes = jS.decodes, XH.e.dracoWorkersStarted = jS.workersStarted, XH.e.dracoMostWorkers = jS.mostWorkers
    }
    async function nH(SS, HS, gS, bS, XS) {
      try {
        return await async function(SS, HS, gS, bS, XS, xS) {
          var NS;
          let qS;
          const uS = null === (NS = (0, IH.e)()) || void 0 === NS ? void 0 : NS.Hj,
            IS = null !== uS && void 0 !== uS && uS.gj && HS === uS.lL() ? uS : null,
            fS = XS && !IS;
          return await mS(SS, HS, gS, bS, tS.c, (SS => (qS = new jH(HS, fS), new GH(SS, HS, qS, fS, new tH(HS, bS), xS, IS).load())), !XS), qS
        }(SS, HS, gS, DS, bS, XS)
      } finally {
        CH()
      }
    }
    async function PH(SS, HS, gS, bS) {
      try {
        return await mS(SS, HS, gS, DS, tS.c, (SS => bS(SS, new tH(HS, DS))))
      } finally {
        CH()
      }
    }
    bH = bS.c, IS || (IS = {
      scriptUrl: new URL(bH.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(bH.wasmBinaryUrl, location.href).href
    })
  },
  41514: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => xS
    });
    var tS = gS(138),
      bS = gS(1158);

    function XS(SS) {
      return (0, tS.b)() ? `https://${bS.b.discordDomain}/${SS.href}` : SS.href
    }
    const xS = {
      scriptUrl: XS(new gS.U(gS(41522))),
      wasmBinaryUrl: XS(new gS.U(gS(41525)))
    }
  },
  36265: SS => {
    SS.exports = function(SS, HS, gS, tS) {
      var bS = self || window;
      try {
        try {
          var XS;
          try {
            XS = new bS.Blob([SS])
          } catch (uS) {
            (XS = new(bS.BlobBuilder || bS.WebKitBlobBuilder || bS.MozBlobBuilder || bS.MSBlobBuilder)).append(SS), XS = XS.getBlob()
          }
          var xS = bS.URL || bS.webkitURL,
            NS = xS.createObjectURL(XS),
            qS = new bS[HS](NS, gS);
          return xS.revokeObjectURL(NS), qS
        } catch (uS) {
          return new bS[HS]("data:application/javascript,".concat(encodeURIComponent(SS)), gS)
        }
      } catch (uS) {
        if (!tS) throw Error("Inline worker is not supported");
        return new bS[HS](tS, gS)
      }
    }
  },
  41522: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41525: (SS, HS, gS) => {
    SS.exports = gS.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);
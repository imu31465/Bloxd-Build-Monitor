export const id = 205;
export const ids = [205];
export const modules = {
  41542: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      loadGlbAsset: () => KT,
      loadGlbTree: () => IT
    });
    var hm = fm(37970),
      Am = fm(41550),
      am = fm(36330),
      xm = fm.n(am);

    function wm() {
      return xm()('(()=>{class mm extends Error{}function Tm(Tm,fm){const hm=Tm._malloc(fm);if(0===hm)throw new mm(`Draco: the decoder\'s heap refused ${fm} bytes`);return hm}function fm(mm){return{[mm.DT_FLOAT32]:[Float32Array,5126],[mm.DT_INT8]:[Int8Array,5120],[mm.DT_INT16]:[Int16Array,5122],[mm.DT_INT32]:[Int32Array,5124],[mm.DT_UINT8]:[Uint8Array,5121],[mm.DT_UINT16]:[Uint16Array,5123],[mm.DT_UINT32]:[Uint32Array,5125]}}function hm(Tm,hm,Am,am,xm){let wm=null,Dm=null,im=null;try{wm=new Tm.Decoder,Dm=new Tm.DecoderBuffer,Dm.Init(hm,hm.byteLength);let Rm=0;const pm=wm.GetEncodedGeometryType(Dm);if(pm===Tm.TRIANGULAR_MESH){const fm=new Tm.Mesh;im=fm;const hm=wm.DecodeBufferToMesh(Dm,fm);if(!hm.ok()||0===fm.ptr)throw new mm(hm.error_msg());Rm=3*fm.num_faces()}else{if(pm!==Tm.POINT_CLOUD)throw new mm(`Draco: Cannot decode invalid geometry type ${pm}`);{const fm=new Tm.PointCloud;im=fm;const hm=wm.DecodeBufferToPointCloud(Dm,fm);if(!hm.ok()||!fm.ptr)throw new mm(hm.error_msg())}}const Em=im.num_points();if(Em!==am.vertices||Rm!==am.indices)throw new mm(`Draco: decoded ${Em} vertices and ${Rm} indices, the accessors declare ${am.vertices} and ${am.indices}`);const om=fm(Tm),Om=[];for(const{kind:Tm,id:fm,components:hm}of Am){const Am=wm.GetAttributeByUniqueId(im,fm);if(!Am||0===Am.ptr)throw new mm(`Draco: no attribute with id ${fm} (${Tm})`);const am=Am.data_type();if(!om[am])throw new mm(`Draco: Cannot decode invalid data type ${am}`);if(Am.num_components()!==hm)throw new mm(`Draco: ${Tm} decodes to ${Am.num_components()} components, its accessor declares ${hm}`);Om.push([Tm,Am,am])}return xm({dracoDecoder:wm,geometry:im,triangles:pm===Tm.TRIANGULAR_MESH,numPoints:Em,numIndices:Rm,attributes:Om})}finally{im&&Tm.destroy(im),Dm&&Tm.destroy(Dm),wm&&Tm.destroy(wm)}}const Am=self;let am=null;self.onmessage=mm=>{let{data:xm}=mm;if("init"===xm.id){try{importScripts(xm.url),am=DracoDecoderModule({wasmBinary:xm.wasmBinary}),Am.postMessage({id:"initDone"})}catch(pm){Am.postMessage({id:"initError",message:pm instanceof Error?pm.message:String(pm)})}return}const{seq:wm,data:Dm,attributeIds:im,expected:Rm}=xm;am?am.then((mm=>{try{const am=function(mm,Am,am,xm){const wm=Object.keys(am).map((mm=>({kind:mm,id:am[mm],components:xm.components[mm]})));return hm(mm,Am,wm,xm,(hm=>{let{dracoDecoder:Am,geometry:am,triangles:xm,numPoints:wm,numIndices:Dm,attributes:im}=hm;const Rm=fm(mm);let pm=null;if(xm){const fm=4*Dm,hm=Tm(mm,fm);try{Am.GetTrianglesUInt32Array(am,fm,hm),pm=new Uint32Array(Dm),pm.set(new Uint32Array(mm.HEAPF32.buffer,hm,Dm))}finally{mm._free(hm)}}const Em=[];for(const[fm,om,Om]of im){const[hm]=Rm[Om],xm=om.num_components(),Dm=wm*xm,im=Dm*hm.BYTES_PER_ELEMENT,pm=Tm(mm,im);try{Am.GetAttributeDataArrayForAllPoints(am,om,Om,im,pm),Em.push({kind:fm,data:new hm(mm.HEAPF32.buffer,pm,Dm).slice(),size:xm,byteOffset:om.byte_offset(),byteStride:om.byte_stride(),normalized:om.normalized()})}finally{mm._free(pm)}}return{indices:pm,attributes:Em,totalVertices:wm}}))}(mm,Dm,im,Rm),xm=am.attributes.map((mm=>mm.data.buffer));am.indices&&xm.push(am.indices.buffer),Am.postMessage({id:"decoded",seq:wm,...am},xm)}catch(pm){Am.postMessage({id:"decodeError",seq:wm,message:pm instanceof Error?pm.message:String(pm)})}}),(mm=>{Am.postMessage({id:"decodeError",seq:wm,message:mm instanceof Error?mm.message:String(mm)})})):Am.postMessage({id:"decodeError",seq:wm,message:"Draco: the decoder module is not loaded"})}})();', "Worker", void 0, fm.p + "dracoDecode.worker.11a3257b.worker.js")
    }
    var Dm = fm(105);
    const im = 1e3;
    let Rm = null,
      pm = null;
    const Em = [],
      om = [];
    let Om = 0;
    const Ym = {
        decodes: 0,
        workersStarted: 0,
        mostWorkers: 0
      },
      qm = function(mm, Tm) {
        const fm = mm ? Math.max(1, Math.min(Math.floor(.5 * mm), 4)) : 1;
        return Tm ? Math.min(fm, 2) : fm
      }("object" === typeof navigator ? navigator.hardwareConcurrency : void 0, (0, Dm.isMobile)());

    function jm() {
      if (!Rm) return Promise.reject(new Error("Draco: configureDracoPool was not called"));
      const {
        scriptUrl: mm,
        wasmBinaryUrl: Tm
      } = Rm;
      return pm ??= fetch(Tm).then((mm => {
        if (!mm.ok) throw new Error(`Draco: fetching ${Tm} failed: ${mm.status}`);
        return mm.arrayBuffer()
      })), pm.catch((() => {
        pm = null
      })), Ym.workersStarted++, pm.then((Tm => new Promise(((fm, hm) => {
        const Am = new wm;
        Am.onerror = mm => {
          Am.onmessage = null, Am.onerror = null, Am.terminate(), hm(new Error("Draco: the decode worker failed to start" + (mm.message ? `: ${mm.message}` : " (its script did not load)")))
        }, Am.onmessage = mm => {
          let {
            data: Tm
          } = mm;
          Am.onmessage = null, Am.onerror = null, "initDone" === Tm.id ? fm(Am) : (Am.terminate(), hm(new Error(`Draco: ${"initError"===Tm.id?Tm.message:"the worker did not start"}`)))
        };
        const am = Tm.slice(0),
          xm = {
            id: "init",
            url: mm,
            wasmBinary: am
          };
        Am.postMessage(xm, [am])
      }))))
    }

    function Vm(mm) {
      const Tm = Em.indexOf(mm); - 1 !== Tm && Em.splice(Tm, 1);
      const fm = om.shift();
      fm && Km(fm)
    }

    function Im(mm, Tm) {
      mm.busy = !0, mm.releaseTimer && (clearTimeout(mm.releaseTimer), mm.releaseTimer = null);
      mm.worker.then((fm => {
        const hm = Om++;
        fm.onmessage = Am => {
          let {
            data: am
          } = Am;
          if (("decoded" === am.id || "decodeError" === am.id) && am.seq === hm) {
            if (fm.onmessage = null, fm.onerror = null, "decoded" === am.id) return Ym.decodes++, Tm.resolve({
              indices: am.indices,
              attributes: am.attributes,
              totalVertices: am.totalVertices
            }), void(() => {
              const Tm = om.shift();
              Tm ? Im(mm, Tm) : (mm.busy = !1, mm.releaseTimer = setTimeout((() => {
                const Tm = Em.indexOf(mm); - 1 !== Tm && Em.splice(Tm, 1), mm.worker.then((mm => {
                  mm.terminate()
                }))
              }), im))
            })();
            fm.terminate(), Tm.reject(new Error(am.message)), Vm(mm)
          }
        }, fm.onerror = hm => {
          fm.onmessage = null, fm.onerror = null, fm.terminate(), Tm.reject(new Error(`Draco: the decode worker failed: ${hm.message}`)), Vm(mm)
        };
        const Am = {
          id: "decode",
          seq: hm,
          data: Tm.data,
          attributeIds: Tm.attributeIds,
          expected: Tm.expected
        };
        fm.postMessage(Am, [Tm.data.buffer])
      }), (fm => {
        Tm.reject(fm instanceof Error ? fm : new Error(String(fm))), Vm(mm)
      }))
    }

    function Km(mm) {
      const Tm = Em.find((mm => !mm.busy));
      if (Tm) Im(Tm, mm);
      else {
        if (Em.length < qm) {
          const Tm = {
            worker: jm(),
            busy: !0,
            releaseTimer: null
          };
          return Em.push(Tm), Ym.mostWorkers = Math.max(Ym.mostWorkers, Em.length), void Im(Tm, mm)
        }
        om.push(mm)
      }
    }

    function Qm(mm, Tm, fm) {
      return new Promise(((hm, Am) => {
        Km({
          data: new Int8Array(mm.buffer, mm.byteOffset, mm.byteLength).slice(),
          attributeIds: Tm,
          expected: fm,
          resolve: hm,
          reject: Am
        })
      }))
    }
    var nm = fm(37535),
      Jm = fm(37545),
      cm = fm(34363),
      zm = fm(34357);
    const Zm = {
      index: -1,
      magFilter: void 0,
      minFilter: void 0,
      wrapS: void 0,
      wrapT: void 0
    };

    function km(mm) {
      const Tm = (0, zm.h)(mm.byteLength);
      if (Tm) throw new cm.n(Tm);
      const {
        json: fm,
        bin: hm
      } = (0, cm.w)(mm), Am = (0, zm.f)(fm, hm);
      if (Am) throw new cm.n(Am);
      try {
        return function(mm, Tm) {
          var fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm;
          const jm = new Map,
            Vm = fm => {
              let hm = jm.get(fm);
              if (!hm) {
                var Am;
                const am = mm.bufferViews[fm],
                  xm = null !== (Am = am.byteOffset) && void 0 !== Am ? Am : 0;
                hm = {
                  index: fm,
                  bytes: Tm.subarray(xm, xm + am.byteLength),
                  byteStride: am.byteStride
                }, jm.set(fm, hm)
              }
              return hm
            },
            Im = new Map,
            Km = Tm => {
              let fm = Im.get(Tm);
              if (!fm) {
                var hm;
                const Am = mm.accessors[Tm];
                fm = {
                  index: Tm,
                  count: Am.count,
                  type: Am.type,
                  numComponents: cm.q[Am.type],
                  componentType: Am.componentType,
                  normalized: null !== (hm = Am.normalized) && void 0 !== hm && hm,
                  byteOffset: Am.byteOffset,
                  bufferView: void 0 === Am.bufferView ? null : Vm(Am.bufferView),
                  min: Am.min,
                  max: Am.max
                }, Im.set(Tm, fm)
              }
              return fm
            },
            Qm = null !== (fm = null === (hm = mm.extensionsUsed) || void 0 === hm ? void 0 : hm.includes("KHR_draco_mesh_compression")) && void 0 !== fm && fm,
            nm = (null !== (Am = mm.meshes) && void 0 !== Am ? Am : []).map(((Tm, fm) => {
              const hm = Tm.primitives.map(((Tm, fm) => {
                var hm, Am, am;
                const xm = Qm ? null === (hm = Tm.extensions) || void 0 === hm ? void 0 : hm.KHR_draco_mesh_compression : void 0;
                let wm = null;
                const Dm = [];
                if (xm) {
                  const fm = {
                    vertices: mm.accessors[Tm.attributes.POSITION].count,
                    indices: void 0 === Tm.indices ? 0 : mm.accessors[Tm.indices].count,
                    components: {}
                  };
                  wm = {
                    bufferView: Vm(xm.bufferView),
                    attributeIds: {},
                    normalized: {},
                    expected: fm
                  };
                  for (const [hm, Am] of cm.j) {
                    const am = xm.attributes[hm];
                    if (void 0 === am) continue;
                    wm.attributeIds[Am] = am;
                    const Dm = Tm.attributes[hm];
                    var im;
                    if (void 0 !== Dm) wm.normalized[Am] = null !== (im = mm.accessors[Dm].normalized) && void 0 !== im && im, fm.components[Am] = cm.q[mm.accessors[Dm].type]
                  }
                } else
                  for (const [mm, Rm] of cm.j) {
                    const fm = Tm.attributes[mm];
                    void 0 !== fm && Dm.push({
                      semantic: mm,
                      kind: Rm,
                      accessor: Km(fm)
                    })
                  }
                return {
                  index: fm,
                  mode: null !== (Am = Tm.mode) && void 0 !== Am ? Am : 4,
                  attributes: Dm,
                  indices: xm || void 0 === Tm.indices ? null : Km(Tm.indices),
                  position: void 0 === Tm.attributes.POSITION ? null : Km(Tm.attributes.POSITION),
                  material: null !== (am = Tm.material) && void 0 !== am ? am : null,
                  draco: wm
                }
              }));
              return {
                index: fm,
                name: Tm.name,
                primitives: hm,
                extras: Tm.extras
              }
            })),
            Jm = (null !== (am = mm.nodes) && void 0 !== am ? am : []).map(((mm, Tm) => {
              var fm, hm;
              return {
                index: Tm,
                name: mm.name,
                children: null !== (fm = mm.children) && void 0 !== fm ? fm : [],
                mesh: null !== (hm = mm.mesh) && void 0 !== hm ? hm : null,
                translation: mm.translation,
                rotation: mm.rotation,
                scale: mm.scale,
                hasCamera: void 0 !== mm.camera,
                extras: mm.extras
              }
            })),
            zm = null !== (xm = null === (wm = mm.extensionsUsed) || void 0 === wm ? void 0 : wm.includes("KHR_materials_unlit")) && void 0 !== xm && xm,
            km = null !== (Dm = null === (im = mm.extensionsUsed) || void 0 === im ? void 0 : im.includes("KHR_texture_transform")) && void 0 !== Dm && Dm,
            bm = (null !== (Rm = mm.materials) && void 0 !== Rm ? Rm : []).map(((mm, Tm) => {
              var fm, hm, Am, am;
              const xm = mm.pbrMetallicRoughness,
                wm = null === xm || void 0 === xm ? void 0 : xm.baseColorTexture;
              return {
                index: Tm,
                name: mm.name,
                extras: mm.extras,
                unlit: zm && void 0 !== (null === (fm = mm.extensions) || void 0 === fm ? void 0 : fm.KHR_materials_unlit),
                pbr: xm ? {
                  baseColorFactor: xm.baseColorFactor,
                  metallicFactor: xm.metallicFactor,
                  roughnessFactor: xm.roughnessFactor
                } : null,
                baseColorTexture: wm ? {
                  texture: wm.index,
                  transform: km && (null === (hm = wm.extensions) || void 0 === hm ? void 0 : hm.KHR_texture_transform) || null
                } : null,
                emissiveFactor: mm.emissiveFactor,
                alphaMode: null !== (Am = mm.alphaMode) && void 0 !== Am ? Am : "OPAQUE",
                alphaCutoff: mm.alphaCutoff,
                doubleSided: null !== (am = mm.doubleSided) && void 0 !== am && am
              }
            })),
            Sm = (null !== (pm = mm.textures) && void 0 !== pm ? pm : []).map(((Tm, fm) => {
              var hm, Am;
              const am = void 0 === Tm.sampler ? Zm : {
                index: Tm.sampler,
                ...null === (hm = mm.samplers) || void 0 === hm ? void 0 : hm[Tm.sampler]
              };
              return {
                index: fm,
                sampler: {
                  index: am.index,
                  magFilter: am.magFilter,
                  minFilter: am.minFilter,
                  wrapS: am.wrapS,
                  wrapT: am.wrapT
                },
                image: null !== (Am = Tm.source) && void 0 !== Am ? Am : -1
              }
            })),
            em = (null !== (Em = mm.images) && void 0 !== Em ? Em : []).map(((mm, Tm) => ({
              index: Tm,
              name: mm.name,
              mimeType: mm.mimeType,
              bufferView: Vm(mm.bufferView)
            }))),
            Nm = null !== (om = (0, cm.v)(mm)) && void 0 !== om ? om : 0;
          return {
            json: mm,
            rootNodes: null !== (Om = null === (Ym = mm.scenes) || void 0 === Ym || null === (qm = Ym[Nm]) || void 0 === qm ? void 0 : qm.nodes) && void 0 !== Om ? Om : [],
            nodes: Jm,
            meshes: nm,
            materials: bm,
            textures: Sm,
            images: em
          }
        }(fm, hm)
      } catch (am) {
        throw am instanceof cm.m ? am : new cm.m(`reading the GLB failed: ${am instanceof Error?am.message:String(am)}`)
      }
    }
    async function bm(mm, Tm) {
      var fm, hm;
      const Am = mm.draco;
      if (!Am) throw new cm.m("not a Draco primitive");
      let am;
      try {
        am = await Tm(Am.bufferView.bytes, Am.attributeIds, Am.expected)
      } catch (im) {
        throw new cm.m(`Draco decoding failed: ${im instanceof Error?im.message:String(im)}`)
      }
      const {
        vertices: xm,
        indices: wm,
        components: Dm
      } = Am.expected;
      if (am.totalVertices !== xm || (null !== (fm = null === (hm = am.indices) || void 0 === hm ? void 0 : hm.length) && void 0 !== fm ? fm : 0) !== wm || am.attributes.some((mm => mm.size !== Dm[mm.kind] || mm.data.length !== xm * mm.size))) throw new cm.m("Draco decoding gave other counts than the accessors declare");
      for (const Rm of am.attributes) {
        const mm = Am.normalized[Rm.kind];
        void 0 !== mm && (Rm.normalized = mm)
      }
      return am
    }
    const Sm = new WeakMap;

    function em(mm, Tm) {
      var fm;
      const hm = null !== (fm = Sm.get(mm)) && void 0 !== fm ? fm : Tm(mm);
      return Sm.set(mm, hm), hm
    }

    function Nm(mm) {
      const Tm = mm.bufferView,
        fm = 5125 === mm.componentType ? Uint32Array : Uint16Array,
        hm = Tm.bytes.buffer,
        Am = Tm.bytes.byteOffset + (mm.byteOffset || 0);
      return Am % fm.BYTES_PER_ELEMENT !== 0 ? new fm(hm.slice(Am, Am + mm.count * fm.BYTES_PER_ELEMENT), 0) : new fm(hm, Am, mm.count)
    }

    function Gm(mm, Tm) {
      if (mm.min && mm.max) return [new Float64Array(mm.min), new Float64Array(mm.max)];
      const fm = Tm.find((mm => {
          let {
            kind: Tm
          } = mm;
          return "position" === Tm
        })),
        hm = fm ? (0, Jm.f)(fm, mm.count) : new Float32Array(0);
      return (0, Jm.k)(hm.length / 3, ((mm, Tm) => hm[3 * mm + Tm]))
    }

    function Xm(mm) {
      const Tm = mm.attributes.map((mm => {
          var Tm, fm;
          let {
            kind: hm,
            accessor: Am
          } = mm;
          const {
            bufferView: am,
            numComponents: xm
          } = Am;
          if (!am) {
            return {
              kind: hm,
              data: em(Am, (() => new Float32Array(xm * Am.count))),
              offset: 0,
              stride: 4 * xm,
              components: xm,
              glType: 5126,
              isNormalized: !1
            }
          }
          const wm = null !== (Tm = am.byteStride) && void 0 !== Tm ? Tm : xm * cm.e[Am.componentType];
          return {
            kind: hm,
            data: am.bytes,
            offset: null !== (fm = Am.byteOffset) && void 0 !== fm ? fm : 0,
            stride: wm,
            components: xm,
            glType: Am.componentType,
            isNormalized: Am.normalized
          }
        })),
        fm = mm.indices,
        hm = fm && em(fm, Nm),
        Am = mm.position;
      return new Jm.e(Tm, hm, Am.count, ...Gm(Am, Tm))
    }
    const Pm = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array];

    function Hm(mm, Tm) {
      const fm = Tm.attributes.map((mm => {
        let {
          kind: Tm,
          data: fm,
          size: hm,
          byteOffset: Am,
          byteStride: am,
          normalized: xm
        } = mm;
        return {
          kind: Tm,
          data: fm,
          offset: Am,
          stride: am,
          components: hm,
          glType: 5120 + Pm.indexOf(fm.constructor),
          isNormalized: xm
        }
      }));
      return new Jm.e(fm, Tm.indices, Tm.totalVertices, ...Gm(mm.position, fm))
    }

    function ym(mm) {
      const Tm = mm.lastIndexOf("/");
      return Tm < 0 ? mm : mm.substring(Tm + 1)
    }

    function Cm(mm) {
      const Tm = mm.lastIndexOf("/");
      return Tm < 0 ? "" : mm.substring(0, Tm + 1)
    }

    function rm(mm) {
      return mm.name || `node${mm.index}`
    }
    const sm = {
        rotation: [0, 1, 0, 0],
        scale: [1, 1, -1]
      },
      lm = {
        9728: 12,
        9729: 2,
        9984: 9,
        9985: 11,
        9986: 10
      },
      Mm = {
        9728: 1,
        9729: 7,
        9984: 4,
        9985: 5,
        9986: 8,
        9987: 6
      };

    function um(mm) {
      var Tm, fm, hm, Am;
      const am = null !== (Tm = mm.minFilter) && void 0 !== Tm ? Tm : 9987;
      return 9729 === (null !== (fm = mm.magFilter) && void 0 !== fm ? fm : 9729) ? null !== (hm = lm[am]) && void 0 !== hm ? hm : 3 : null !== (Am = Mm[am]) && void 0 !== Am ? Am : 4
    }
    const Bm = {
      33071: 0,
      33648: 2
    };

    function Lm(mm) {
      var Tm;
      return null !== (Tm = Bm[null !== mm && void 0 !== mm ? mm : 10497]) && void 0 !== Tm ? Tm : 1
    }

    function tm(mm) {
      return 9728 === mm.minFilter || 9729 === mm.minFilter
    }

    function Um(mm) {
      var Tm, fm, hm;
      const Am = Float64Array.from(null !== (Tm = mm.scale) && void 0 !== Tm ? Tm : [1, 1, 1]);
      return mm.hasCamera && (Am[0] = -1), {
        translation: Float64Array.from(null !== (fm = mm.translation) && void 0 !== fm ? fm : [0, 0, 0]),
        rotation: Float64Array.from(null !== (hm = mm.rotation) && void 0 !== hm ? hm : [0, 0, 0, 1]),
        scale: Am
      }
    }

    function dm(mm, Tm) {
      let {
        translation: fm,
        rotation: hm,
        scale: Am
      } = mm;
      const am = new Float32Array(16);
      return (0, nm.e)(Am, 0, hm, 0, fm, 0, am), Tm && (0, nm.l)(am, Tm, 0, am), am
    }
    class gm {
      constructor(mm, Tm, fm, hm) {
        this.model = mm, this.decode = Tm, this.fileInfo = fm, this.uniqueRootUrl = hm, this.primitives = void 0, this.parents = new Map, this.uses = new Map, this.own = new Map;
        const Am = new Set,
          am = (Tm, fm) => {
            const hm = mm.nodes[Tm];
            if (this.parents.has(hm)) throw new cm.m(`/nodes/${Tm}: Invalid recursive node hierarchy`);
            this.parents.set(hm, fm);
            const xm = null === hm.mesh ? [] : mm.meshes[hm.mesh].primitives,
              wm = xm.map((mm => {
                const Tm = xm.length > 1;
                return {
                  name: Tm ? `${rm(hm)}_primitive${mm.index}` : rm(hm),
                  node: hm,
                  primitive: mm,
                  part: Tm,
                  geometry: null
                }
              }));
            this.uses.set(hm, wm);
            const Dm = null !== hm.mesh && Am.has(hm.mesh);
            Am.add(hm.mesh), this.own.set(hm, Dm ? [] : wm);
            for (const mm of hm.children) am(mm, hm)
          };
        for (const xm of mm.rootNodes) am(xm, null);
        this.primitives = mm.nodes.flatMap((mm => {
          var Tm;
          return null !== (Tm = this.own.get(mm)) && void 0 !== Tm ? Tm : []
        }))
      }
      decodeGeometries() {
        const mm = new Map;
        return Promise.all(this.primitives.map((async Tm => {
          const {
            primitive: fm
          } = Tm, hm = fm.draco;
          let Am = hm ? mm.get(hm.bufferView.index) : Promise.resolve(Xm(fm));
          Am || (Am = bm(fm, this.decode).then((mm => Hm(fm, mm))), mm.set(hm.bufferView.index, Am)), Tm.geometry = await Am
        })))
      }
      parentOf(mm) {
        var Tm;
        return null !== (Tm = this.parents.get(mm)) && void 0 !== Tm ? Tm : null
      }
      meshesUnder(mm) {
        const Tm = this.model.nodes.filter((mm => this.uses.has(mm)));
        for (const hm of Tm) {
          const Tm = this.uses.get(hm),
            fm = Tm.find((Tm => Tm.name === mm));
          if (fm) return 1 === Tm.length ? this.subtree(hm) : this.own.get(hm).includes(fm) ? [fm] : []
        }
        const fm = Tm.find((Tm => 1 !== this.uses.get(Tm).length && rm(Tm) === mm));
        return fm ? this.subtree(fm) : null
      }
      subtree(mm) {
        return [...this.own.get(mm), ...mm.children.flatMap((mm => this.subtree(this.model.nodes[mm])))]
      }
      worldMatrix(mm, Tm, fm) {
        let hm = dm(Um(Tm ? sm : {}), null);
        const Am = [];
        for (let xm = mm.part ? mm.node : this.parentOf(mm.node); xm; xm = this.parentOf(xm)) Am.unshift(xm);
        for (const xm of Am) hm = dm(Um(xm), hm);
        const am = Um(mm.part ? {} : mm.node);
        return void 0 !== fm && am.scale.fill(fm), dm(am, hm)
      }
      floats(mm) {
        const {
          vertexAttributes: Tm,
          vertexCount: fm
        } = mm.geometry;
        return new Map(Tm.map((mm => [mm.kind, (0, Jm.f)(mm, fm)])))
      }
      imageUrl(mm) {
        return function(mm, Tm, fm) {
          let {
            name: hm
          } = Tm;
          return `data:${mm}${hm}#image${fm}`
        }(this.uniqueRootUrl, this.fileInfo, mm)
      }
      textureDesc(mm, Tm) {
        var fm;
        let {
          texture: hm,
          transform: Am
        } = mm;
        const {
          sampler: am,
          image: xm
        } = this.model.textures[hm], {
          bufferView: wm,
          mimeType: Dm,
          name: im
        } = this.model.images[xm], Rm = Am && {
          ...Am.offset ? {
            uOffset: Am.offset[0],
            vOffset: Am.offset[1]
          } : {},
          uRotationCenter: 0,
          vRotationCenter: 0,
          ...Am.rotation ? {
            wAng: -Am.rotation
          } : {},
          ...Am.scale ? {
            uScale: Am.scale[0],
            vScale: Am.scale[1]
          } : {}
        };
        return {
          url: this.imageUrl(xm),
          noMipmap: tm(am),
          invertY: !1,
          samplingMode: um(am),
          data: {
            bytes: wm.bytes,
            mimeType: Dm,
            label: im,
            context: `/textures/${hm}`
          },
          sets: {
            wrapU: Lm(am.wrapS),
            wrapV: Lm(am.wrapT),
            ...Rm,
            coordinatesIndex: null !== (fm = null === Am || void 0 === Am ? void 0 : Am.texCoord) && void 0 !== fm ? fm : 0,
            hasAlpha: Tm
          }
        }
      }
    }
    async function Wm(mm, Tm, fm, hm, Am, am) {
      let xm = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
      const wm = function(mm, Tm, fm) {
          return "string" !== typeof Tm ? {
            url: "",
            rootUrl: mm,
            name: fm()
          } : Tm ? Tm.startsWith("data:") ? {
            url: Tm,
            rootUrl: mm,
            name: ""
          } : mm ? {
            url: mm + Tm,
            rootUrl: mm,
            name: Tm
          } : {
            url: Tm,
            rootUrl: Cm(Tm),
            name: ym(Tm)
          } : {
            url: mm,
            rootUrl: Cm(mm),
            name: ym(mm)
          }
        }(fm, mm, Am),
        Dm = {};
      Tm.addPendingData(Dm);
      try {
        const fm = km(await async function(mm, Tm) {
            return "string" !== typeof Tm ? Tm : mm.url.startsWith("data:") ? (0, cm.r)(mm.url) : await (0, cm.u)(mm.url)
          }(wm, mm)),
          Dm = new gm(fm, hm, wm, function(mm, Tm) {
            let {
              rootUrl: fm,
              name: hm
            } = mm;
            return !fm.startsWith("file:") && hm ? fm : `${fm}${Tm()}/`
          }(wm, Am));
        return await am(Dm), Tm.importedMeshesFiles && (Tm.loadingPluginName = "FN", xm && Tm.importedMeshesFiles.push(wm.url)), Dm
      } finally {
        Tm.removePendingData(Dm)
      }
    }
    var Fm = fm(37661),
      mT = fm(37510),
      TT = fm(37955);

    function fT(mm) {
      if (null === mm || void 0 === mm || !mm.min || !mm.max) return null;
      const [Tm, fm, hm] = mm.min, [Am, am, xm] = mm.max, {
        BoundingInfo: wm,
        WO: Dm
      } = (0, Fm.e)();
      return new wm(new Dm(Tm, fm, hm), new Dm(Am, am, xm))
    }

    function hT(mm) {
      (0, mT.h)(mm) || (mm.geometry && mm.geometry.useBoundingInfoFromGeometry ? mm._updateBoundingInfo() : mm.refreshBoundingInfo(!0, !0))
    }
    class AT {
      constructor(mm, Tm) {
        this.Aq = mm, this.decode = Tm, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
      }
      viewBytes(mm) {
        let Tm = this.viewData.get(mm.index);
        return Tm || (Tm = this.bufferData.then((() => mm.bytes)), this.viewData.set(mm.index, Tm)), Tm
      }
      viewBuffer(mm) {
        let Tm = this.viewBuffers.get(mm.index);
        return Tm || (Tm = this.viewBytes(mm).then((mm => new((0, Fm.e)().XO)(this.Aq.dO(), mm, !1))), this.viewBuffers.set(mm.index, Tm)), Tm
      }
      vertexBuffer(mm, Tm) {
        const {
          kind: fm,
          data: hm
        } = Tm, Am = `${mm.index}:${fm}`;
        let am = this.vertexBuffers.get(Am);
        if (!am) {
          const xm = mm.bufferView;
          am = xm ? this.viewBuffer(xm).then((mm => this.layoutVertexBuffer(mm, Tm))) : Promise.resolve(hm).then((mm => new((0, Fm.e)().VertexBuffer)(this.Aq.dO(), mm, fm, !1))), this.vertexBuffers.set(Am, am)
        }
        return am
      }
      layoutVertexBuffer(mm, Tm) {
        let {
          kind: fm,
          offset: hm,
          stride: Am,
          components: am,
          glType: xm,
          isNormalized: wm
        } = Tm;
        const Dm = this.Aq.dO();
        return new((0, Fm.e)().VertexBuffer)(Dm, mm, fm, !1, void 0, Am, void 0, hm, am, xm, wm, !0, void 0, !0)
      }
      load(mm, Tm, fm) {
        const hm = (0, mT.h)(fm),
          Am = mm => {
            hm || (fm._delayInfo = fm._delayInfo || [], -1 === fm._delayInfo.indexOf(mm) && fm._delayInfo.push(mm))
          },
          am = Tm.draco;
        if (am) {
          for (const mm in am.attributeIds) Am(mm);
          let xm = this.dracoGeometry.get(am.bufferView.index);
          return xm || (xm = this.viewBytes(am.bufferView).then((async () => {
            let Am;
            try {
              Am = await bm(Tm, this.decode)
            } catch (Dm) {
              throw new cm.m(`${mm}: ${Dm instanceof Error?Dm.message:String(Dm)}`)
            }
            const am = Hm(Tm, Am);
            if (hm) return am;
            const xm = fT(Tm.position),
              wm = new((0, Fm.e)().MirroredGeometry)(fm.name, this.Aq);
            xm && (wm._boundingInfo = xm, wm.useBoundingInfoFromGeometry = !0), am.indexData && wm.setIndices(am.indexData);
            for (const mm of am.vertexAttributes) wm.setVerticesBuffer(this.layoutVertexBuffer(mm.data, mm), am.vertexCount);
            return wm.link(am), wm
          })), this.dracoGeometry.set(am.bufferView.index, xm)), xm
        }
        const xm = [],
          wm = Xm(Tm);
        if (hm) return fm.isUnIndexed = !wm.indexData, fm.hasVertexAlpha = (0, TT.i)(Tm), Promise.resolve(wm);
        const Dm = new((0, Fm.e)().MirroredGeometry)(fm.name, this.Aq),
          {
            indexData: im
          } = wm;
        im ? xm.push(this.viewBytes(Tm.indices.bufferView).then((() => {
          Dm.setIndices(im)
        }))) : fm.isUnIndexed = !0;
        for (const [Rm, {
            kind: pm,
            accessor: Em
          }] of Tm.attributes.entries()) Am(pm), xm.push(this.vertexBuffer(Em, wm.vertexAttributes[Rm]).then((mm => {
          if ("position" === mm.getKind()) {
            const mm = fT(Em);
            mm && (Dm._boundingInfo = mm, Dm.useBoundingInfoFromGeometry = !0)
          }
          Dm.setVerticesBuffer(mm, wm.vertexCount)
        })));
        return (0, TT.i)(Tm) && (fm.hasVertexAlpha = !0), Promise.all(xm).then((() => (Dm.link(wm), Dm)))
      }
    }
    var aT, xT = fm(37377),
      wT = fm(37181),
      DT = fm(37967),
      iT = fm(37327),
      RT = fm(37357),
      pT = fm(2760),
      ET = fm(37345);

    function oT(mm, Tm) {
      mm.metadata = mm.metadata || {};
      const fm = mm._internalMetadata = mm._internalMetadata || {},
        hm = fm.FN = fm.FN || {};
      (hm.pointers = hm.pointers || []).push(Tm)
    }

    function OT(mm, Tm) {
      if (Tm && Object.keys(Tm).length > 0) {
        const fm = mm.metadata = mm.metadata || {};
        (fm.FN = fm.FN || {}).extras = Tm
      }
    }

    function YT(mm, Tm) {
      Tm.position = mm.translation ? wT.WO.FromArray(mm.translation) : wT.WO.Zero(), Tm.rotationQuaternion = mm.rotation ? wT.Quaternion.FromArray(mm.rotation) : wT.Quaternion.Identity(), Tm.fi = mm.scale ? wT.WO.FromArray(mm.scale) : wT.WO.One()
    }
    class qT {
      constructor(mm, Tm) {
        if (this.Aq = mm, this.meshes = [], this.transformNodes = [], this.geometries = [], this.materials = [], this.textures = [], this.rootNodes = [], this.release = null, Tm) {
          const Tm = mm.dO(),
            fm = mm.iG.add((() => {
              this.dispose()
            })),
            hm = Tm.UO.add((() => {
              for (const mm of [...this.geometries, ...this.meshes, ...this.textures]) mm._rebuild()
            }));
          this.release = () => {
            mm.iG.remove(fm), Tm.UO.remove(hm)
          }
        }
      }
      getNodes() {
        return [...this.meshes, ...this.transformNodes]
      }
      addAllToScene() {
        if (this.release) {
          this.release(), this.release = null;
          for (const mm of this.meshes) this.Aq.whm(mm);
          for (const mm of this.materials) this.Aq.addMaterial(mm);
          for (const mm of this.geometries) this.Aq.addGeometry(mm);
          for (const mm of this.transformNodes) this.Aq.addTransformNode(mm);
          for (const mm of this.textures) this.Aq.addTexture(mm)
        }
      }
      dispose() {
        var mm;
        for (const Tm of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
          for (const mm of Tm.slice()) mm.dispose();
          Tm.length = 0
        }
        null === (mm = this.release) || void 0 === mm || mm.call(this), this.release = null
      }
    }
    class jT {
      constructor(mm, Tm, fm, hm, Am, am, xm) {
        this.asset = mm, this.Aq = Tm, this.tree = fm, this.geometryData = Am, this.materials = am, this.lite = xm, this.container = void 0, this.root = null, this.nodeObjects = new Map, this.nodePrimitives = new Map, this.materialData = new Map, this.container = hm ? fm : null
      }
      create(mm) {
        if (this.lite) return mm();
        const Tm = this.Aq;
        Tm._blockEntityCollection = !!this.container;
        try {
          const Tm = mm();
          return this.container && (Tm._parentContainer = this.container), Tm
        } finally {
          Tm._blockEntityCollection = !1
        }
      }
      node(mm, Tm) {
        return this.create((() => this.lite ? Tm ? (0, DT.e)(this.lite, mm) : (0, DT.n)(this.lite, mm) : Tm ? new((0, Fm.e)().Mesh)(mm, this.Aq) : new((0, Fm.e)().TransformNode)(mm, this.Aq)))
      }
      async load() {
        var mm;
        this.asset.model.json.nodes && this.createRoot();
        const Tm = this.lite ? null : this.Aq,
          fm = null !== (mm = null === Tm || void 0 === Tm ? void 0 : Tm.blockMaterialDirtyMechanism) && void 0 !== mm && mm;
        let hm;
        Tm && (Tm.blockMaterialDirtyMechanism = !0);
        try {
          hm = this.loadScene()
        } finally {
          null === Tm || void 0 === Tm || Tm._forceBlockMaterialDirtyMechanism(fm)
        }
        await hm;
        const {
          root: Am,
          tree: am
        } = this;
        Am && (Am.Dk(!0), am.meshes.push(Am), am.rootNodes.push(Am));
        for (const wm of this.asset.model.nodes) {
          const mm = this.nodeObjects.get(wm.index);
          mm && ["TransformNode", "LiteNode"].includes(mm.getClassName()) && am.transformNodes.push(mm);
          for (const Tm of null !== (xm = this.nodePrimitives.get(wm.index)) && void 0 !== xm ? xm : []) {
            var xm;
            am.meshes.push(Tm);
            const mm = Tm.geometry;
            mm && !am.geometries.includes(mm) && am.geometries.push(mm)
          }
        }
      }
      createRoot() {
        const mm = this.node("__root__", !0);
        this.root = mm, mm.Dk(!1), this.Aq.useRightHandedSystem || YT(sm, mm)
      }
      loadScene() {
        const mm = [];
        for (const Tm of this.asset.model.rootNodes) mm.push(this.loadNode(this.asset.model.nodes[Tm], (mm => {
          mm.parent = this.root
        })));
        return mm.push(Promise.resolve()), Promise.all(mm).then((() => {}))
      }
      loadNode(mm, Tm) {
        const fm = `/nodes/${mm.index}`,
          hm = [],
          Am = Am => {
            if (oT(Am, fm), YT(mm, Am), mm.hasCamera && !this.Aq.useRightHandedSystem) {
              const {
                fi: mm
              } = Am;
              mm.set(-1, mm.y, mm.z)
            }
            for (const Tm of mm.children) hm.push(this.loadNode(this.asset.model.nodes[Tm], (mm => {
              mm.parent = Am
            })));
            (fm => {
              OT(fm, mm.extras), Tm(fm)
            })(Am)
          };
        if (null === mm.mesh) {
          const Tm = this.node(rm(mm), !1);
          this.nodeObjects.set(mm.index, Tm), Am(Tm)
        } else {
          const Tm = this.asset.model.meshes[mm.mesh];
          hm.push(this.loadMesh(`/meshes/${Tm.index}`, mm, Tm, Am))
        }
        return Promise.all(hm).then((() => {
          for (const fm of null !== (Tm = this.nodePrimitives.get(mm.index)) && void 0 !== Tm ? Tm : []) {
            var Tm;
            hT(fm)
          }
          return this.nodeObjects.get(mm.index)
        }))
      }
      loadMesh(mm, Tm, fm, hm) {
        const Am = [],
          am = rm(Tm);
        if (1 === fm.primitives.length) {
          const hm = fm.primitives[0];
          Am.push(this.loadPrimitive(`${mm}/primitives/${hm.index}`, am, hm, (mm => {
            this.nodeObjects.set(Tm.index, mm), this.nodePrimitives.set(Tm.index, [mm])
          })))
        } else {
          const hm = this.node(am, !1);
          this.nodeObjects.set(Tm.index, hm);
          const xm = [];
          this.nodePrimitives.set(Tm.index, xm);
          for (const Tm of fm.primitives) Am.push(this.loadPrimitive(`${mm}/primitives/${Tm.index}`, `${am}_primitive${Tm.index}`, Tm, (mm => {
            mm.parent = hm, xm.push(mm)
          })))
        }
        const xm = this.nodeObjects.get(Tm.index);
        return hm(xm), Promise.all(Am).then((() => xm))
      }
      loadPrimitive(mm, Tm, fm, hm) {
        const Am = [],
          am = this.node(Tm, !0);
        if (am.sideOrientation = this.Aq.useRightHandedSystem ? iT.b.CounterClockWiseSideOrientation : iT.b.ClockWiseSideOrientation, Am.push(this.geometryData.load(mm, fm, am).then((mm => {
            if ((0, mT.h)(am)) {
              var Tm, fm;
              const hm = mm;
              am.replaceModel(hm, Int32Array.of(0, null !== (Tm = null === (fm = hm.indexData) || void 0 === fm ? void 0 : fm.length) && void 0 !== Tm ? Tm : hm.vertexCount, 0, hm.vertexCount))
            } else this.create((() => (mm.applyToMesh(am), mm)))
          }))), this.materials) {
          const mm = 0 === fm.mode ? iT.b.PointListDrawMode : iT.b.TriangleFillMode,
            Tm = null === fm.material ? null : this.asset.model.materials[fm.material];
          Am.push(this.loadMaterial(Tm, mm, (mm => {
            am.material = mm
          })))
        }
        return oT(am, mm), hm(am), Promise.all(Am).then((() => am))
      }
      loadMaterial(mm, Tm, fm) {
        var hm;
        const Am = `${null!==(hm=null===mm||void 0===mm?void 0:mm.index)&&void 0!==hm?hm:"default"}:${Tm}`;
        let am = this.materialData.get(Am);
        return am || (am = this.createMaterial(mm, Tm), this.materialData.set(Am, am)), fm(am.material), am.promise
      }
      createMaterial(mm, Tm) {
        const fm = mm ? mm.name || `material${mm.index}` : "__GLTFLoader._default",
          {
            style: hm,
            unlit: Am
          } = this.materials;
        let am;
        const xm = this.create((() => {
          const xm = (0, ET.b)({
            name: fm,
            Aq: this.Aq,
            sets: {
              ...(0, TT.e)(this.asset, mm, hm, Am),
              fillMode: Tm
            },
            unrendered: !0
          });
          return am = xm.model, xm.mirror
        }));
        let wm = Promise.resolve();
        if (mm) {
          const Tm = `/materials/${mm.index}`,
            hm = am.diffuseTexture;
          if (hm && !hm.mirror) wm = new Promise((mm => setTimeout(mm)));
          else if (hm) {
            const Am = hm.mirror;
            Am._parentContainer = this.container, Am.name = `${fm} (Base Color)`, oT(Am, `${Tm}${mm.unlit?"":"/pbrMetallicRoughness"}/baseColorTexture`), this.tree.textures.push(Am), wm = (0, RT.y)(hm)
          }
          OT(xm, mm.extras), oT(xm, Tm)
        }
        return this.tree.materials.push(xm), {
          material: xm,
          promise: wm
        }
      }
    }

    function VT() {
      xT.e.dracoDecodes = Ym.decodes, xT.e.dracoWorkersStarted = Ym.workersStarted, xT.e.dracoMostWorkers = Ym.mostWorkers
    }
    async function IT(mm, Tm, fm, Am, am) {
      try {
        return await async function(mm, Tm, fm, Am, am, xm) {
          var wm;
          let Dm;
          const im = null === (wm = (0, pT.d)()) || void 0 === wm ? void 0 : wm.qY,
            Rm = null !== im && void 0 !== im && im.jY && Tm === im.wG() ? im : null,
            pm = am && !Rm;
          return await Wm(mm, Tm, fm, Am, hm.c, (mm => (Dm = new qT(Tm, pm), new jT(mm, Tm, Dm, pm, new AT(Tm, Am), xm, Rm).load())), !am), Dm
        }(mm, Tm, fm, Qm, Am, am)
      } finally {
        VT()
      }
    }
    async function KT(mm, Tm, fm, Am) {
      try {
        return await Wm(mm, Tm, fm, Qm, hm.c, (mm => Am(mm, new AT(Tm, Qm))))
      } finally {
        VT()
      }
    }
    aT = Am.e, Rm || (Rm = {
      scriptUrl: new URL(aT.scriptUrl, location.href).href,
      wasmBinaryUrl: new URL(aT.wasmBinaryUrl, location.href).href
    })
  },
  41550: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => xm
    });
    var hm = fm(135),
      Am = fm(1105);

    function am(mm) {
      return (0, hm.c)() ? `https://${Am.d.discordDomain}/${mm.href}` : mm.href
    }
    const xm = {
      scriptUrl: am(new fm.U(fm(41552))),
      wasmBinaryUrl: am(new fm.U(fm(41554)))
    }
  },
  36330: mm => {
    mm.exports = function(mm, Tm, fm, hm) {
      var Am = self || window;
      try {
        try {
          var am;
          try {
            am = new Am.Blob([mm])
          } catch (im) {
            (am = new(Am.BlobBuilder || Am.WebKitBlobBuilder || Am.MozBlobBuilder || Am.MSBlobBuilder)).append(mm), am = am.getBlob()
          }
          var xm = Am.URL || Am.webkitURL,
            wm = xm.createObjectURL(am),
            Dm = new Am[Tm](wm, fm);
          return xm.revokeObjectURL(wm), Dm
        } catch (im) {
          return new Am[Tm]("data:application/javascript,".concat(encodeURIComponent(mm)), fm)
        }
      } catch (im) {
        if (!hm) throw Error("Inline worker is not supported");
        return new Am[Tm](hm, fm)
      }
    }
  },
  41552: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/draco_wasm_wrapper_gltf_v2_1.8b33994b6159ad3fc976.js"
  },
  41554: (mm, Tm, fm) => {
    mm.exports = fm.p + "static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm"
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);
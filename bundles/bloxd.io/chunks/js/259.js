export const id = 259;
export const ids = [259];
export const modules = {
  40002: (bb, cb, sb) => {
    sb.d(cb, {
      $: () => Rb,
      $b: () => Sb,
      $f: () => Ks,
      A: () => yb,
      Ac: () => ob,
      B: () => tb,
      Bb: () => Fb,
      Be: () => Rs,
      Bf: () => ck,
      C: () => Ac,
      Cd: () => Eb,
      Df: () => kk,
      Ec: () => Rc,
      Ef: () => vs,
      F: () => nb,
      Fb: () => bs,
      Fc: () => kc,
      Fd: () => Gb,
      Fe: () => os,
      Gf: () => us,
      H: () => wb,
      He: () => is,
      Hf: () => Qs,
      Ie: () => Gs,
      Jb: () => Pb,
      Jc: () => Mc,
      Jd: () => Ob,
      Kf: () => Fs,
      L: () => Uk,
      Lc: () => gb,
      Md: () => mc,
      Me: () => Os,
      N: () => pc,
      Nb: () => jb,
      Nd: () => Ib,
      Ne: () => xs,
      Of: () => Zs,
      Pc: () => Hc,
      Pe: () => Es,
      Qb: () => xb,
      R: () => vb,
      Rc: () => Ic,
      Rd: () => fb,
      Re: () => qs,
      Rf: () => zs,
      Sd: () => Qc,
      T: () => xc,
      Tc: () => sc,
      Te: () => Ds,
      Ub: () => cc,
      Ud: () => oc,
      Ue: () => ws,
      Uf: () => Ns,
      Vc: () => Jb,
      Vd: () => qb,
      X: () => jc,
      Xb: () => lc,
      Xe: () => As,
      Yc: () => Vb,
      Yf: () => ls,
      Zd: () => Xc,
      Ze: () => ds,
      ad: () => kb,
      ae: () => vc,
      ag: () => Ys,
      b: () => ab,
      be: () => qc,
      bf: () => Tk,
      cd: () => hb,
      ce: () => bc,
      d: () => Tb,
      db: () => Fc,
      dc: () => Db,
      eb: () => Zb,
      ed: () => Tc,
      ef: () => hs,
      eg: () => Vs,
      fb: () => ks,
      fe: () => pb,
      g: () => Yb,
      h: () => Kb,
      hc: () => ac,
      hd: () => Qb,
      hf: () => ys,
      ib: () => Ws,
      ie: () => Ab,
      ig: () => Ss,
      j: () => Hs,
      k: () => Us,
      ke: () => Lb,
      kf: () => gs,
      lc: () => Cb,
      ld: () => lb,
      m: () => Ub,
      mb: () => zb,
      md: () => mb,
      mf: () => Ps,
      mg: () => Cs,
      n: () => dc,
      nb: () => ss,
      nc: () => Nb,
      nd: () => as,
      oe: () => Mb,
      of: () => ts,
      pe: () => Is,
      pf: () => Bs,
      q: () => wc,
      qb: () => cs,
      qe: () => Wk,
      qg: () => rs,
      r: () => rb,
      rb: () => nc,
      rc: () => fc,
      rd: () => Ts,
      s: () => Sc,
      se: () => es,
      sg: () => Xs,
      tb: () => Uc,
      tf: () => ak,
      u: () => Xb,
      uc: () => Hb,
      ud: () => ub,
      uf: () => bk,
      v: () => Wc,
      vb: () => Wb,
      ve: () => Ls,
      vg: () => ms,
      wb: () => eb,
      wc: () => rc,
      x: () => Bb,
      xc: () => db,
      xe: () => ns,
      xf: () => sk,
      yd: () => ib,
      zb: () => Cc,
      zf: () => ps
    });
    const kb = -2147483648,
      Wb = 12,
      ab = 12,
      Tb = 4095,
      Ub = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      Ib = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      Hb = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      fb = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      Mb = {
        Alive: 16
      },
      Xb = 32,
      nb = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      mb = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      lb = 4294967295,
      Qb = 0,
      eb = 4294967295,
      Cb = 4,
      Nb = 123,
      Vb = -2147483648,
      Lb = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      ub = 51,
      Yb = 5,
      hb = 4294967295,
      Jb = 4294967295,
      gb = 128,
      Bb = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      tb = 16,
      yb = 255,
      Pb = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      Db = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      Eb = {
        Hotbar: 256,
        Drop: 257
      },
      ib = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      Ob = {
        Rate: 0,
        Gyro: 1
      },
      Gb = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      Kb = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      Zb = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      zb = {
        LookPointed: 1,
        Held: 2
      },
      qb = 3,
      db = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      Ab = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      wb = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      rb = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      ob = {
        Stackable: 1
      },
      Sb = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      Rb = {
        Detail: 1,
        RoomForOne: 2
      },
      vb = {
        HaveIngredients: 1,
        Listed: 2
      },
      Fb = {
        HasOpts: 1
      },
      xb = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      jb = {
        Up: 1,
        Down: 2
      },
      pb = {
        TwoD: 1,
        Loop: 2
      },
      bc = {
        StopAfter: 1
      },
      cc = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      sc = {
        Pose: 1,
        Visible: 2
      },
      kc = 255,
      Wc = 65535,
      ac = 255,
      Tc = 65535,
      Uc = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      Ic = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      Hc = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      fc = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      Mc = 4294967295,
      Xc = 4294967295,
      nc = 255,
      mc = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      lc = {
        critical: 123
      },
      Qc = 4294967295,
      ec = {
        BYTES: 4,
        aX: (bb, cb) => bb.getUint32(cb + 0, !0)
      },
      Cc = {
        BYTES: 12,
        serverId: (bb, cb) => bb.getInt32(cb + 0, !0),
        index: (bb, cb) => bb.getUint32(cb + 4, !0),
        kind: (bb, cb) => bb.getUint16(cb + 8, !0)
      },
      Nc = {
        BYTES: 20,
        pos: (bb, cb, sb) => bb.getInt32(cb + 0 + 4 * sb, !0),
        actual: (bb, cb) => bb.getUint32(cb + 12, !0),
        dataLen: (bb, cb) => bb.getUint32(cb + 16, !0)
      },
      Vc = {
        BYTES: 20,
        what: (bb, cb) => bb.getUint8(cb + 0),
        value: (bb, cb) => bb.getInt16(cb + 2, !0),
        pos: (bb, cb, sb) => bb.getInt32(cb + 4 + 4 * sb, !0),
        block: (bb, cb) => bb.getUint32(cb + 16, !0)
      },
      Lc = {
        BYTES: 4,
        item: (bb, cb) => bb.getUint16(cb + 0, !0),
        slot: (bb, cb) => bb.getUint8(cb + 2)
      },
      uc = {
        BYTES: 16,
        target: (bb, cb) => bb.getInt32(cb + 0, !0),
        damage: (bb, cb) => bb.getFloat32(cb + 4, !0),
        distance: (bb, cb) => bb.getFloat32(cb + 8, !0),
        crit: (bb, cb) => bb.getUint8(cb + 12)
      },
      Yc = {
        BYTES: 4,
        slot: (bb, cb) => bb.getUint16(cb + 0, !0)
      },
      hc = {
        BYTES: 20,
        what: (bb, cb) => bb.getUint8(cb + 0),
        value: (bb, cb) => bb.getInt16(cb + 2, !0),
        pos: (bb, cb, sb) => bb.getInt32(cb + 4 + 4 * sb, !0),
        block: (bb, cb) => bb.getUint32(cb + 16, !0)
      },
      Jc = {
        BYTES: 12,
        serverId: (bb, cb) => bb.getInt32(cb + 0, !0),
        index: (bb, cb) => bb.getUint32(cb + 4, !0),
        what: (bb, cb) => bb.getUint16(cb + 8, !0)
      },
      gc = {
        BYTES: 24,
        cx: (bb, cb) => bb.getInt32(cb + 0, !0),
        cy: (bb, cb) => bb.getInt32(cb + 4, !0),
        cz: (bb, cb) => bb.getInt32(cb + 8, !0),
        slot: (bb, cb) => bb.getUint32(cb + 12, !0),
        generation: (bb, cb) => bb.getUint32(cb + 16, !0),
        flags: (bb, cb) => bb.getUint32(cb + 20, !0)
      },
      Bc = {
        BYTES: 44,
        pos: (bb, cb, sb) => bb.getFloat64(cb + 0 + 8 * sb, !0),
        sound: (bb, cb) => bb.getUint16(cb + 24, !0),
        flags: (bb, cb) => bb.getUint16(cb + 26, !0),
        handle: (bb, cb) => bb.getUint32(cb + 28, !0),
        volume: (bb, cb) => bb.getFloat32(cb + 32, !0),
        rate: (bb, cb) => bb.getFloat32(cb + 36, !0),
        refDist: (bb, cb) => bb.getFloat32(cb + 40, !0)
      },
      tc = {
        BYTES: 28,
        pos: (bb, cb, sb) => bb.getFloat64(cb + 0 + 8 * sb, !0),
        handle: (bb, cb) => bb.getUint32(cb + 24, !0)
      },
      yc = {
        BYTES: 16,
        handle: (bb, cb) => bb.getUint32(cb + 0, !0),
        volume: (bb, cb) => bb.getFloat32(cb + 4, !0),
        rate: (bb, cb) => bb.getFloat32(cb + 8, !0),
        refDist: (bb, cb) => bb.getFloat32(cb + 12, !0)
      },
      Pc = {
        BYTES: 12,
        handle: (bb, cb) => bb.getUint32(cb + 0, !0),
        to: (bb, cb) => bb.getFloat32(cb + 4, !0),
        ms: (bb, cb) => bb.getUint16(cb + 8, !0),
        flags: (bb, cb) => bb.getUint16(cb + 10, !0)
      },
      Dc = {
        BYTES: 4,
        handle: (bb, cb) => bb.getUint32(cb + 0, !0)
      },
      Ec = {
        BYTES: 4,
        reason: (bb, cb) => bb.getUint8(cb + 0),
        code: (bb, cb) => bb.getUint8(cb + 1)
      },
      ic = {
        BYTES: 4,
        key: (bb, cb) => bb.getUint8(cb + 0),
        tag: (bb, cb) => bb.getUint8(cb + 1)
      },
      Oc = {
        BYTES: 16,
        save: (bb, cb) => bb.getUint32(cb + 0, !0),
        index: (bb, cb) => bb.getUint32(cb + 4, !0),
        ptr: (bb, cb) => bb.getUint32(cb + 8, !0),
        len: (bb, cb) => bb.getUint32(cb + 12, !0)
      },
      Gc = {
        BYTES: 16,
        save: (bb, cb) => bb.getUint32(cb + 0, !0),
        kind: (bb, cb) => bb.getUint8(cb + 4),
        parts: (bb, cb) => bb.getUint32(cb + 8, !0),
        bytes: (bb, cb) => bb.getUint32(cb + 12, !0)
      },
      Kc = {
        BYTES: 4,
        totalTicks: (bb, cb) => bb.getUint32(cb + 0, !0)
      },
      Zc = {
        BYTES: 24,
        what: (bb, cb) => bb.getUint8(cb + 0),
        int: (bb, cb) => bb.getInt32(cb + 4, !0),
        x: (bb, cb) => bb.getFloat64(cb + 8, !0),
        y: (bb, cb) => bb.getFloat64(cb + 16, !0)
      },
      zc = {
        BYTES: 8,
        what: (bb, cb) => bb.getUint8(cb + 0),
        kind: (bb, cb) => bb.getUint8(cb + 1),
        save: (bb, cb) => bb.getUint32(cb + 4, !0)
      },
      qc = {
        BYTES: 4,
        jT: (bb, cb) => bb.getUint16(cb + 0, !0)
      },
      dc = {
        BYTES: 360,
        eye: (bb, cb, sb) => bb.getFloat64(cb + 0 + 8 * sb, !0),
        localPos: (bb, cb, sb) => bb.getFloat64(cb + 24 + 8 * sb, !0),
        kbb: (bb, cb, sb) => bb.getFloat64(cb + 48 + 8 * sb, !0),
        viewProj: (bb, cb, sb) => bb.getFloat32(cb + 72 + 4 * sb, !0),
        origin: (bb, cb, sb) => bb.getInt32(cb + 136 + 4 * sb, !0),
        heading: (bb, cb) => bb.getFloat32(cb + 148, !0),
        pitch: (bb, cb) => bb.getFloat32(cb + 152, !0),
        tanHalfFovX: (bb, cb) => bb.getFloat32(cb + 156, !0),
        tanHalfFovY: (bb, cb) => bb.getFloat32(cb + 160, !0),
        viewportCss: (bb, cb, sb) => bb.getFloat32(cb + 164 + 4 * sb, !0),
        localVel: (bb, cb, sb) => bb.getFloat32(cb + 172 + 4 * sb, !0),
        actionDir: (bb, cb, sb) => bb.getFloat32(cb + 184 + 4 * sb, !0),
        localId: (bb, cb) => bb.getInt32(cb + 196, !0),
        playerFlags: (bb, cb) => bb.getUint32(cb + 200, !0),
        targetBlock: (bb, cb, sb) => bb.getInt32(cb + 204 + 4 * sb, !0),
        targetAdjacent: (bb, cb, sb) => bb.getInt32(cb + 216 + 4 * sb, !0),
        targetBlockId: (bb, cb) => bb.getUint32(cb + 228, !0),
        targetNormal: (bb, cb, sb) => bb.getInt8(cb + 232 + 1 * sb),
        targetFlags: (bb, cb) => bb.getUint8(cb + 235),
        pickedEntity: (bb, cb) => bb.getInt32(cb + 236, !0),
        breakingPos: (bb, cb, sb) => bb.getInt32(cb + 240 + 4 * sb, !0),
        breakingProgress: (bb, cb) => bb.getFloat32(cb + 252, !0),
        VV: (bb, cb) => bb.getUint16(cb + 256, !0),
        selectedSlot: (bb, cb) => bb.getUint8(cb + 258),
        heldFlags: (bb, cb) => bb.getUint8(cb + 259),
        heldAttrVersion: (bb, cb) => bb.getUint32(cb + 260, !0),
        inventoryVersion: (bb, cb) => bb.getUint32(cb + 264, !0),
        effectsVersion: (bb, cb) => bb.getUint32(cb + 268, !0),
        entitiesVersion: (bb, cb) => bb.getUint32(cb + 272, !0),
        entRenderPtr: (bb, cb) => bb.getUint32(cb + 276, !0),
        entCapacity: (bb, cb) => bb.getUint32(cb + 280, !0),
        frameMs: (bb, cb) => bb.getFloat32(cb + 284, !0),
        fps: (bb, cb) => bb.getFloat32(cb + 288, !0),
        entVisPtr: (bb, cb) => bb.getUint32(cb + 292, !0),
        momentumFrac: (bb, cb) => bb.getFloat32(cb + 296, !0),
        chunkSlotsPtr: (bb, cb) => bb.getUint32(cb + 300, !0),
        chunkSlotsLen: (bb, cb) => bb.getUint32(cb + 304, !0),
        walkThroughPtr: (bb, cb) => bb.getUint32(cb + 308, !0),
        walkThroughLen: (bb, cb) => bb.getUint32(cb + 312, !0),
        audioViewPtr: (bb, cb) => bb.getUint32(cb + 316, !0),
        inventoryViewPtr: (bb, cb) => bb.getUint32(cb + 320, !0),
        eventOverflowGen: (bb, cb) => bb.getUint32(cb + 324, !0),
        eventOverflowMask: (bb, cb) => bb.getUint32(cb + 328, !0),
        promptEntity: (bb, cb) => bb.getInt32(cb + 332, !0),
        replayViewPtr: (bb, cb) => bb.getUint32(cb + 336, !0),
        slotIcon: (bb, cb) => bb.getUint32(cb + 340, !0),
        localDeaths: (bb, cb) => bb.getUint32(cb + 344, !0),
        cameraFar: (bb, cb) => bb.getFloat32(cb + 348, !0),
        gliderBoostFuel: (bb, cb) => bb.getUint32(cb + 352, !0),
        interactLabel: (bb, cb) => bb.getUint16(cb + 356, !0),
        interactIcon: (bb, cb) => bb.getUint16(cb + 358, !0)
      },
      Ac = {
        BYTES: 16,
        voxelsPtr: (bb, cb) => bb.getUint32(cb + 0, !0),
        version: (bb, cb) => bb.getUint32(cb + 4, !0),
        generation: (bb, cb) => bb.getUint32(cb + 8, !0),
        qU: (bb, cb) => bb.getUint32(cb + 12, !0)
      },
      wc = {
        BYTES: 56,
        listener: (bb, cb, sb) => bb.getFloat64(cb + 0 + 8 * sb, !0),
        forward: (bb, cb, sb) => bb.getFloat32(cb + 24 + 4 * sb, !0),
        up: (bb, cb, sb) => bb.getFloat32(cb + 36 + 4 * sb, !0),
        dropped: (bb, cb) => bb.getUint32(cb + 48, !0),
        unfollowed: (bb, cb) => bb.getUint32(cb + 52, !0)
      },
      rc = {
        BYTES: 8,
        item: (bb, cb) => bb.getUint16(cb + 0, !0),
        amount: (bb, cb) => bb.getUint16(cb + 2, !0),
        attrVersion: (bb, cb) => bb.getUint32(cb + 4, !0)
      },
      oc = {
        BYTES: 76,
        version: (bb, cb) => bb.getUint32(cb + 0, !0),
        state: (bb, cb) => bb.getUint8(cb + 4),
        cameraMode: (bb, cb) => bb.getUint8(cb + 5),
        aX: (bb, cb) => bb.getUint32(cb + 8, !0),
        totalTicks: (bb, cb) => bb.getUint32(cb + 12, !0),
        speed: (bb, cb) => bb.getFloat32(cb + 16, !0),
        markIn: (bb, cb) => bb.getUint32(cb + 20, !0),
        markOut: (bb, cb) => bb.getUint32(cb + 24, !0),
        editVersion: (bb, cb) => bb.getUint32(cb + 28, !0),
        drops: (bb, cb, sb) => bb.getUint32(cb + 32 + 4 * sb, !0)
      },
      Sc = {
        BYTES: 6,
        flags: (bb, cb) => bb.getUint8(cb + 0),
        harvestType: (bb, cb) => bb.getUint8(cb + 1),
        harvestLevel: (bb, cb) => bb.getUint8(cb + 2),
        attachedTop: (bb, cb) => bb.getUint16(cb + 4, !0)
      },
      Rc = {
        BYTES: 3,
        flags: (bb, cb) => bb.getUint8(cb + 0),
        harvests: (bb, cb) => bb.getUint8(cb + 1),
        level: (bb, cb) => bb.getUint8(cb + 2)
      },
      vc = {
        BYTES: 12,
        item: (bb, cb) => bb.getUint32(cb + 0, !0),
        amount: (bb, cb) => bb.getFloat64(cb + 4, !0)
      },
      Fc = {
        BYTES: 16,
        recipes: (bb, cb) => bb.getUint32(cb + 0, !0),
        ingredients: (bb, cb) => bb.getUint32(cb + 4, !0),
        craftAllTimes: (bb, cb) => bb.getUint32(cb + 8, !0),
        flags: (bb, cb) => bb.getUint32(cb + 12, !0)
      },
      xc = {
        BYTES: 10,
        item: (bb, cb) => bb.getUint16(cb + 0, !0),
        recipe: (bb, cb) => bb.getUint16(cb + 2, !0),
        produces: (bb, cb) => bb.getUint16(cb + 4, !0),
        requires: (bb, cb) => bb.getUint16(cb + 6, !0),
        flags: (bb, cb) => bb.getUint8(cb + 8)
      },
      jc = {
        BYTES: 4,
        amount: (bb, cb) => bb.getUint16(cb + 0, !0),
        items: (bb, cb) => bb.getUint16(cb + 2, !0)
      },
      pc = {
        BYTES: 8,
        amount: (bb, cb) => bb.getUint32(cb + 0, !0),
        item: (bb, cb) => bb.getUint16(cb + 4, !0),
        from: (bb, cb) => bb.getUint16(cb + 6, !0)
      },
      bs = {
        BYTES: 16,
        serverId: (bb, cb) => bb.getInt32(cb + 0, !0),
        len: (bb, cb) => bb.getUint32(cb + 4, !0),
        kind: (bb, cb) => bb.getUint16(cb + 8, !0),
        variation: (bb, cb) => bb.getUint16(cb + 10, !0),
        pose: (bb, cb) => bb.getUint8(cb + 12),
        meta: (bb, cb) => bb.getUint8(cb + 13),
        mesh: (bb, cb) => bb.getUint8(cb + 14),
        flags: (bb, cb) => bb.getUint8(cb + 15)
      },
      cs = {
        BYTES: 40,
        terrainOpaque: (bb, cb) => bb.getUint32(cb + 0, !0),
        terrainTransparent: (bb, cb) => bb.getUint32(cb + 4, !0),
        terrainPack: (bb, cb) => bb.getUint32(cb + 8, !0),
        earthSky: (bb, cb) => bb.getUint32(cb + 12, !0),
        skyMeshes: (bb, cb) => bb.getUint32(cb + 16, !0),
        regular: (bb, cb) => bb.getUint32(cb + 20, !0),
        thin: (bb, cb) => bb.getUint32(cb + 24, !0),
        line: (bb, cb) => bb.getUint32(cb + 28, !0),
        text: (bb, cb) => bb.getUint32(cb + 32, !0),
        particles: (bb, cb) => bb.getUint32(cb + 36, !0)
      },
      ss = {
        BYTES: 16,
        fov: (bb, cb) => bb.getFloat32(cb + 0, !0),
        baseFov: (bb, cb) => bb.getFloat32(cb + 4, !0),
        aspect: (bb, cb) => bb.getFloat32(cb + 8, !0),
        bodyHeading: (bb, cb) => bb.getFloat32(cb + 12, !0)
      },
      ks = {
        BYTES: 32,
        eye: (bb, cb, sb) => bb.getFloat64(cb + 0 + 8 * sb, !0),
        heading: (bb, cb) => bb.getFloat32(cb + 24, !0),
        pitch: (bb, cb) => bb.getFloat32(cb + 28, !0)
      },
      Ws = {
        BYTES: 40,
        feet: (bb, cb, sb) => bb.getFloat64(cb + 0 + 8 * sb, !0),
        eyeHeight: (bb, cb) => bb.getFloat32(cb + 24, !0),
        heading: (bb, cb) => bb.getFloat32(cb + 28, !0),
        headingIsDrawn: (bb, cb) => bb.getUint32(cb + 32, !0)
      },
      as = 32,
      Ts = 63,
      Us = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function Is(bb, cb, sb, kb, Wb) {
      var ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Jb, gb, Bb, tb, yb;
      switch (bb) {
        case 32:
          return 4 === kb && (null === (ab = Wb.tickEnd) || void 0 === ab || ab.call(Wb, ec.aX(cb, sb)), !0);
        case 33:
          return 12 === kb && (null === (Tb = Wb.entitySpawned) || void 0 === Tb || Tb.call(Wb, Cc.serverId(cb, sb), Cc.index(cb, sb), Cc.kind(cb, sb)), !0);
        case 34:
          return 12 === kb && (null === (Ub = Wb.entityDespawned) || void 0 === Ub || Ub.call(Wb, Cc.serverId(cb, sb), Cc.index(cb, sb), Cc.kind(cb, sb)), !0);
        case 39:
          return !(kb < 20) && (null === (Ib = Wb.changeBlockFail) || void 0 === Ib || Ib.call(Wb, Nc.pos(cb, sb, 0), Nc.pos(cb, sb, 1), Nc.pos(cb, sb, 2), Nc.actual(cb, sb), Nc.dataLen(cb, sb), sb + 20, kb - 20), !0);
        case 46:
          return 0 === kb && (null === (Hb = Wb.changeBlockFailEnd) || void 0 === Hb || Hb.call(Wb), !0);
        case 48:
          return 20 === kb && (null === (fb = Wb.inventoryEvent) || void 0 === fb || fb.call(Wb, Vc.what(cb, sb), Vc.value(cb, sb), Vc.pos(cb, sb, 0), Vc.pos(cb, sb, 1), Vc.pos(cb, sb, 2), Vc.block(cb, sb)), !0);
        case 49:
          return 4 === kb && (null === (Mb = Wb.heldItemChanged) || void 0 === Mb || Mb.call(Wb, Lc.item(cb, sb), Lc.slot(cb, sb)), !0);
        case 50:
          return 16 === kb && (null === (Xb = Wb.shotDamage) || void 0 === Xb || Xb.call(Wb, uc.target(cb, sb), uc.damage(cb, sb), uc.distance(cb, sb), uc.crit(cb, sb)), !0);
        case 51:
          return !(kb < 4) && (null === (nb = Wb.enchantOffer) || void 0 === nb || nb.call(Wb, Yc.slot(cb, sb), sb + 4, kb - 4), !0);
        case 52:
          return !(kb < 20) && (null === (mb = Wb.uiEvent) || void 0 === mb || mb.call(Wb, hc.what(cb, sb), hc.value(cb, sb), hc.pos(cb, sb, 0), hc.pos(cb, sb, 1), hc.pos(cb, sb, 2), hc.block(cb, sb), sb + 20, kb - 20), !0);
        case 53:
          return 12 === kb && (null === (lb = Wb.entityInfoChanged) || void 0 === lb || lb.call(Wb, Jc.serverId(cb, sb), Jc.index(cb, sb), Jc.what(cb, sb)), !0);
        case 55:
          return 24 === kb && (null === (Qb = Wb.chunkSlot) || void 0 === Qb || Qb.call(Wb, gc.cx(cb, sb), gc.cy(cb, sb), gc.cz(cb, sb), gc.slot(cb, sb), gc.generation(cb, sb), gc.flags(cb, sb)), !0);
        case 40:
          return 44 === kb && (null === (eb = Wb.playSound) || void 0 === eb || eb.call(Wb, Bc.pos(cb, sb, 0), Bc.pos(cb, sb, 1), Bc.pos(cb, sb, 2), Bc.sound(cb, sb), Bc.flags(cb, sb), Bc.handle(cb, sb), Bc.volume(cb, sb), Bc.rate(cb, sb), Bc.refDist(cb, sb)), !0);
        case 41:
          return 28 === kb && (null === (Cb = Wb.soundPos) || void 0 === Cb || Cb.call(Wb, tc.pos(cb, sb, 0), tc.pos(cb, sb, 1), tc.pos(cb, sb, 2), tc.handle(cb, sb)), !0);
        case 42:
          return 16 === kb && (null === (Nb = Wb.soundSet) || void 0 === Nb || Nb.call(Wb, yc.handle(cb, sb), yc.volume(cb, sb), yc.rate(cb, sb), yc.refDist(cb, sb)), !0);
        case 43:
          return 12 === kb && (null === (Vb = Wb.soundFade) || void 0 === Vb || Vb.call(Wb, Pc.handle(cb, sb), Pc.to(cb, sb), Pc.ms(cb, sb), Pc.flags(cb, sb)), !0);
        case 44:
          return 4 === kb && (null === (Lb = Wb.soundStop) || void 0 === Lb || Lb.call(Wb, Dc.handle(cb, sb)), !0);
        case 45:
          return 0 === kb && (null === (ub = Wb.soundReset) || void 0 === ub || ub.call(Wb), !0);
        case 56:
          return 4 === kb && (null === (Yb = Wb.replayFailed) || void 0 === Yb || Yb.call(Wb, Ec.reason(cb, sb), Ec.code(cb, sb)), !0);
        case 57:
          return !(kb < 4) && (null === (hb = Wb.replayOption) || void 0 === hb || hb.call(Wb, ic.key(cb, sb), ic.tag(cb, sb), sb + 4, kb - 4), !0);
        case 58:
          return 16 === kb && (null === (Jb = Wb.replayFilePart) || void 0 === Jb || Jb.call(Wb, Oc.save(cb, sb), Oc.index(cb, sb), Oc.ptr(cb, sb), Oc.len(cb, sb)), !0);
        case 59:
          return 16 === kb && (null === (gb = Wb.replayFileReady) || void 0 === gb || gb.call(Wb, Gc.save(cb, sb), Gc.kind(cb, sb), Gc.parts(cb, sb), Gc.bytes(cb, sb)), !0);
        case 60:
          return !(kb < 4) && (null === (Bb = Wb.replayOpened) || void 0 === Bb || Bb.call(Wb, Kc.totalTicks(cb, sb), sb + 4, kb - 4), !0);
        case 61:
          return !(kb < 24) && (null === (tb = Wb.replayUiEvent) || void 0 === tb || tb.call(Wb, Zc.what(cb, sb), Zc.int(cb, sb), Zc.x(cb, sb), Zc.y(cb, sb), sb + 24, kb - 24), !0);
        case 62:
          return 8 === kb && (null === (yb = Wb.recorderEvent) || void 0 === yb || yb.call(Wb, zc.what(cb, sb), zc.kind(cb, sb), zc.save(cb, sb)), !0);
        default:
          return !1
      }
    }
    const Hs = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let fs = new Uint8Array(0);

    function Ms(bb) {
      return fs.buffer !== bb.buffer && (fs = new Uint8Array(bb.buffer)), fs
    }

    function Xs(bb, cb, sb) {
      const kb = bb.Bn(66, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint8(kb + 0, sb), !0
    }

    function ns(bb, cb, sb) {
      const kb = bb.Bn(67, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint32(kb + 0, sb, !0), !0
    }

    function ms(bb, cb, sb) {
      const kb = bb.Bn(68, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint8(kb + 0, sb), !0
    }

    function ls(bb, cb, sb, kb) {
      const Wb = bb.Bn(69, cb, 4 + kb.length);
      if (Wb < 0) return !1;
      const ab = bb.view;
      return ab.setUint8(Wb + 0, sb), Ms(ab).set(kb, ab.byteOffset + Wb + 4), !0
    }

    function Qs(bb, cb, sb, kb, Wb) {
      const ab = bb.Bn(128, cb, 4 + Wb.length);
      if (ab < 0) return !1;
      const Tb = bb.view;
      return Tb.setUint8(ab + 0, sb), Tb.setUint16(ab + 2, kb, !0), Ms(Tb).set(Wb, Tb.byteOffset + ab + 4), !0
    }

    function es(bb, cb, sb) {
      const kb = bb.Bn(131, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setInt32(kb + 0, sb, !0), !0
    }

    function Cs(bb, cb, sb) {
      const kb = bb.Bn(132, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint32(kb + 0, sb, !0), !0
    }

    function Ns(bb, cb, sb) {
      const kb = bb.Bn(133, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint32(kb + 0, sb, !0), !0
    }

    function Vs(bb, cb, sb) {
      const kb = bb.Bn(144, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint8(kb + 0, sb), !0
    }

    function Ls(bb, cb, sb, kb, Wb) {
      const ab = bb.Bn(145, cb, 12);
      if (ab < 0) return !1;
      const Tb = bb.view;
      return Tb.setInt32(ab + 0, sb, !0), Tb.setInt32(ab + 4, kb, !0), Tb.setInt32(ab + 8, Wb, !0), !0
    }

    function us(bb, cb, sb, kb) {
      const Wb = bb.Bn(256, cb, 4 + kb.length);
      if (Wb < 0) return !1;
      const ab = bb.view;
      return ab.setUint16(Wb + 0, sb, !0), Ms(ab).set(kb, ab.byteOffset + Wb + 4), !0
    }

    function Ys(bb, cb, sb) {
      const kb = bb.Bn(258, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint8(kb + 0, sb), !0
    }

    function hs(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
      const Hb = bb.Bn(320, cb, 48 + Ib.length);
      if (Hb < 0) return !1;
      const fb = bb.view;
      fb.setUint32(Hb + 0, sb, !0), fb.setUint16(Hb + 4, kb, !0), fb.setUint16(Hb + 6, Wb, !0), fb.setUint32(Hb + 8, ab, !0);
      for (let Mb = 0; Mb < 3; Mb++) fb.setFloat64(Hb + 12 + 8 * Mb, Tb[Mb], !0);
      for (let Mb = 0; Mb < 3; Mb++) fb.setFloat32(Hb + 36 + 4 * Mb, Ub[Mb], !0);
      return Ms(fb).set(Ib, fb.byteOffset + Hb + 48), !0
    }

    function gs(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
      const Hb = bb.Bn(321, cb, 48 + Ib.length);
      if (Hb < 0) return !1;
      const fb = bb.view;
      fb.setUint32(Hb + 0, sb, !0), fb.setInt32(Hb + 4, kb, !0), fb.setUint16(Hb + 8, Wb, !0), fb.setUint16(Hb + 10, ab, !0);
      for (let Mb = 0; Mb < 3; Mb++) fb.setFloat64(Hb + 12 + 8 * Mb, Tb[Mb], !0);
      for (let Mb = 0; Mb < 3; Mb++) fb.setFloat32(Hb + 36 + 4 * Mb, Ub[Mb], !0);
      return Ms(fb).set(Ib, fb.byteOffset + Hb + 48), !0
    }

    function Bs(bb, cb, sb, kb, Wb, ab, Tb) {
      const Ub = bb.Bn(322, cb, 44 + Tb.length);
      if (Ub < 0) return !1;
      const Ib = bb.view;
      Ib.setUint32(Ub + 0, sb, !0), Ib.setUint32(Ub + 4, kb, !0);
      for (let Hb = 0; Hb < 3; Hb++) Ib.setFloat64(Ub + 8 + 8 * Hb, Wb[Hb], !0);
      for (let Hb = 0; Hb < 3; Hb++) Ib.setFloat32(Ub + 32 + 4 * Hb, ab[Hb], !0);
      return Ms(Ib).set(Tb, Ib.byteOffset + Ub + 44), !0
    }

    function ts(bb, cb, sb) {
      const kb = bb.Bn(323, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint32(kb + 0, sb, !0), !0
    }

    function ys(bb, cb, sb, kb, Wb, ab) {
      const Tb = bb.Bn(324, cb, 32 + ab.length);
      if (Tb < 0) return !1;
      const Ub = bb.view;
      Ub.setUint32(Tb + 0, sb, !0), Ub.setUint32(Tb + 4, kb, !0);
      for (let Ib = 0; Ib < 3; Ib++) Ub.setFloat64(Tb + 8 + 8 * Ib, Wb[Ib], !0);
      return Ms(Ub).set(ab, Ub.byteOffset + Tb + 32), !0
    }

    function Ps(bb, cb) {
      return !(bb.Bn(325, cb, 0) < 0)
    }

    function Ds(bb, cb, sb, kb, Wb, ab) {
      const Tb = bb.Bn(384, cb, 16);
      if (Tb < 0) return !1;
      const Ub = bb.view;
      return Ub.setUint32(Tb + 0, sb, !0), Ub.setUint32(Tb + 4, kb, !0), Ub.setFloat32(Tb + 8, Wb, !0), Ub.setFloat32(Tb + 12, ab, !0), !0
    }

    function Es(bb, cb, sb, kb, Wb, ab, Tb) {
      const Ub = bb.Bn(385, cb, 36 + Tb.length);
      if (Ub < 0) return !1;
      const Ib = bb.view;
      Ib.setUint32(Ub + 0, sb, !0), Ib.setUint32(Ub + 4, kb, !0);
      for (let Hb = 0; Hb < 3; Hb++) Ib.setFloat64(Ub + 8 + 8 * Hb, Wb[Hb], !0);
      return Ib.setUint32(Ub + 32, ab, !0), Ms(Ib).set(Tb, Ib.byteOffset + Ub + 36), !0
    }

    function is(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
      const Hb = bb.Bn(386, cb, 56 + Ib.length);
      if (Hb < 0) return !1;
      const fb = bb.view;
      fb.setUint32(Hb + 0, sb, !0), fb.setUint8(Hb + 4, kb);
      for (let Mb = 0; Mb < 4; Mb++) fb.setFloat32(Hb + 8 + 4 * Mb, Wb[Mb], !0);
      for (let Mb = 0; Mb < 3; Mb++) fb.setFloat64(Hb + 24 + 8 * Mb, ab[Mb], !0);
      return fb.setUint32(Hb + 48, Tb, !0), fb.setUint32(Hb + 52, Ub, !0), Ms(fb).set(Ib, fb.byteOffset + Hb + 56), !0
    }

    function Os(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
      const Hb = bb.Bn(387, cb, 56);
      if (Hb < 0) return !1;
      const fb = bb.view;
      fb.setUint32(Hb + 0, sb, !0), fb.setUint16(Hb + 4, kb, !0), fb.setUint8(Hb + 6, Wb);
      for (let Mb = 0; Mb < 3; Mb++) fb.setFloat64(Hb + 8 + 8 * Mb, ab[Mb], !0);
      for (let Mb = 0; Mb < 2; Mb++) fb.setFloat32(Hb + 32 + 4 * Mb, Tb[Mb], !0);
      fb.setFloat32(Hb + 40, Ub, !0);
      for (let Mb = 0; Mb < 3; Mb++) fb.setFloat32(Hb + 44 + 4 * Mb, Ib[Mb], !0);
      return !0
    }

    function Gs(bb, cb, sb) {
      const kb = bb.Bn(388, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint32(kb + 0, sb, !0), !0
    }

    function Ks(bb, cb, sb, kb) {
      const Wb = bb.Bn(389, cb, 8);
      if (Wb < 0) return !1;
      const ab = bb.view;
      return ab.setInt32(Wb + 0, sb, !0), ab.setFloat32(Wb + 4, kb, !0), !0
    }

    function Zs(bb, cb, sb, kb) {
      const Wb = bb.Bn(390, cb, 8);
      if (Wb < 0) return !1;
      const ab = bb.view;
      return ab.setInt32(Wb + 0, sb, !0), ab.setFloat32(Wb + 4, kb, !0), !0
    }

    function zs(bb, cb, sb, kb, Wb, ab) {
      const Tb = bb.Bn(391, cb, 12);
      if (Tb < 0) return !1;
      const Ub = bb.view;
      return Ub.setFloat32(Tb + 0, sb, !0), Ub.setFloat32(Tb + 4, kb, !0), Ub.setUint8(Tb + 8, Wb), Ub.setUint8(Tb + 9, ab), !0
    }

    function qs(bb, cb, sb) {
      const kb = bb.Bn(392, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint32(kb + 0, sb, !0), !0
    }

    function ds(bb, cb, sb, kb, Wb) {
      const ab = bb.Bn(393, cb, 12);
      if (ab < 0) return !1;
      const Tb = bb.view;
      return Tb.setUint32(ab + 0, sb, !0), Tb.setUint16(ab + 4, kb, !0), Tb.setFloat32(ab + 8, Wb, !0), !0
    }

    function As(bb, cb, sb, kb, Wb, ab, Tb) {
      const Ub = bb.Bn(394, cb, 36);
      if (Ub < 0) return !1;
      const Ib = bb.view;
      Ib.setUint32(Ub + 0, sb, !0), Ib.setUint16(Ub + 4, kb, !0), Ib.setUint8(Ub + 6, Wb);
      for (let Hb = 0; Hb < 3; Hb++) Ib.setFloat64(Ub + 8 + 8 * Hb, ab[Hb], !0);
      return Ib.setFloat32(Ub + 32, Tb, !0), !0
    }

    function ws(bb, cb, sb) {
      const kb = bb.Bn(398, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setUint32(kb + 0, sb, !0), !0
    }

    function rs(bb, cb, sb) {
      const kb = bb.Bn(448, cb, 4);
      if (kb < 0) return !1;
      return bb.view.setFloat32(kb + 0, sb, !0), !0
    }

    function os(bb, cb, sb, kb) {
      const Wb = bb.Bn(450, cb, 12);
      if (Wb < 0) return !1;
      const ab = bb.view;
      for (let Tb = 0; Tb < 2; Tb++) ab.setFloat32(Wb + 0 + 4 * Tb, sb[Tb], !0);
      return ab.setUint8(Wb + 8, kb), !0
    }

    function Ss(bb, cb, sb, kb) {
      const Wb = bb.Bn(452, cb, 8);
      if (Wb < 0) return !1;
      const ab = bb.view;
      return ab.setFloat32(Wb + 0, sb, !0), ab.setUint8(Wb + 4, kb), !0
    }

    function Rs(bb, cb, sb, kb, Wb) {
      const ab = bb.Bn(454, cb, 4);
      if (ab < 0) return !1;
      const Tb = bb.view;
      return Tb.setUint8(ab + 0, sb), Tb.setUint8(ab + 1, kb), Tb.setUint8(ab + 2, Wb), !0
    }

    function vs(bb, cb, sb, kb) {
      const Wb = bb.Bn(455, cb, 40);
      if (Wb < 0) return !1;
      const ab = bb.view;
      for (let Tb = 0; Tb < 9; Tb++) ab.setInt32(Wb + 0 + 4 * Tb, sb[Tb], !0);
      return ab.setUint32(Wb + 36, kb, !0), !0
    }

    function Fs(bb, cb, sb, kb) {
      const Wb = bb.Bn(456, cb, 8);
      if (Wb < 0) return !1;
      const ab = bb.view;
      return ab.setFloat32(Wb + 0, sb, !0), ab.setUint8(Wb + 4, kb), !0
    }

    function xs(bb, cb, sb, kb, Wb) {
      const ab = bb.Bn(457, cb, 16);
      if (ab < 0) return !1;
      const Tb = bb.view;
      for (let Ub = 0; Ub < 3; Ub++) Tb.setInt32(ab + 0 + 4 * Ub, sb[Ub], !0);
      for (let Ub = 0; Ub < 3; Ub++) Tb.setInt8(ab + 12 + 1 * Ub, kb[Ub]);
      return Tb.setUint8(ab + 15, Wb), !0
    }

    function ps(bb, cb, sb, kb) {
      const Wb = bb.Bn(530, cb, 4 + kb.length);
      if (Wb < 0) return !1;
      const ab = bb.view;
      return ab.setUint8(Wb + 0, sb), Ms(ab).set(kb, ab.byteOffset + Wb + 4), !0
    }

    function bk(bb, cb, sb, kb, Wb, ab) {
      const Tb = bb.Bn(531, cb, 12 + ab.length);
      if (Tb < 0) return !1;
      const Ub = bb.view;
      return Ub.setFloat32(Tb + 0, sb, !0), Ub.setFloat32(Tb + 4, kb, !0), Ub.setUint32(Tb + 8, Wb, !0), Ms(Ub).set(ab, Ub.byteOffset + Tb + 12), !0
    }

    function ck(bb, cb, sb, kb, Wb, ab) {
      const Tb = bb.Bn(532, cb, 12 + ab.length);
      if (Tb < 0) return !1;
      const Ub = bb.view;
      return Ub.setInt32(Tb + 0, sb, !0), Ub.setInt32(Tb + 4, kb, !0), Ub.setUint32(Tb + 8, Wb, !0), Ms(Ub).set(ab, Ub.byteOffset + Tb + 12), !0
    }

    function sk(bb, cb, sb, kb, Wb) {
      const ab = bb.Bn(533, cb, 8 + Wb.length);
      if (ab < 0) return !1;
      const Tb = bb.view;
      return Tb.setInt32(ab + 0, sb, !0), Tb.setInt32(ab + 4, kb, !0), Ms(Tb).set(Wb, Tb.byteOffset + ab + 8), !0
    }

    function kk(bb, cb) {
      return !(bb.Bn(576, cb, 0) < 0)
    }

    function Wk(bb, cb, sb, kb, Wb, ab) {
      const Tb = bb.Bn(577, cb, 36 + ab.length);
      if (Tb < 0) return !1;
      const Ub = bb.view;
      Ub.setUint8(Tb + 0, sb);
      for (let Ib = 0; Ib < 16; Ib++) Ub.setUint8(Tb + 4 + 1 * Ib, kb[Ib]);
      for (let Ib = 0; Ib < 16; Ib++) Ub.setUint8(Tb + 20 + 1 * Ib, Wb[Ib]);
      return Ms(Ub).set(ab, Ub.byteOffset + Tb + 36), !0
    }

    function ak(bb, cb, sb, kb) {
      const Wb = bb.Bn(578, cb, 4 + kb.length);
      if (Wb < 0) return !1;
      const ab = bb.view;
      return ab.setUint8(Wb + 0, sb), Ms(ab).set(kb, ab.byteOffset + Wb + 4), !0
    }

    function Tk(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
      const Ib = bb.Bn(579, cb, 36);
      if (Ib < 0) return !1;
      const Hb = bb.view;
      return Hb.setFloat64(Ib + 0, sb, !0), Hb.setFloat64(Ib + 8, kb, !0), Hb.setFloat64(Ib + 16, Wb, !0), Hb.setFloat64(Ib + 24, ab, !0), Hb.setUint16(Ib + 32, Tb, !0), Hb.setUint8(Ib + 34, Ub), !0
    }
    class Uk {
      constructor(bb, cb) {
        this.core = bb, this.afterCall = cb
      }
      canModify(bb, cb, sb) {
        const kb = this.core.vWb(bb, cb, sb);
        return this.afterCall(), kb
      }
      terrainBlocked(bb, cb, sb, kb, Wb) {
        const ab = this.core.Rab(bb, cb, sb, kb, Wb);
        return this.afterCall(), ab
      }
      Tu(bb, cb, sb, kb) {
        const Wb = this.core.Mn(bb, cb, sb, kb);
        return this.afterCall(), Wb
      }
      blockData(bb, cb, sb) {
        const kb = this.core.SWb(bb, cb, sb);
        return this.afterCall(), kb
      }
      cameraSweep(bb, cb, sb, kb, Wb, ab, Tb) {
        const Ub = this.core.Skb(bb, cb, sb, kb, Wb, ab, Tb);
        return this.afterCall(), Ub
      }
      hasServerTarget(bb) {
        const cb = this.core.Hab(bb);
        return this.afterCall(), cb
      }
      entityInteractable(bb) {
        const cb = this.core.kab(bb);
        return this.afterCall(), cb
      }
      entityCrouching(bb) {
        const cb = this.core.sab(bb);
        return this.afterCall(), cb
      }
      predictServerPosition(bb, cb, sb, kb) {
        const Wb = this.core.hab(bb, cb, sb, kb);
        return this.afterCall(), Wb
      }
      setOtherEntitySetting(bb, cb, sb) {
        const kb = this.core.jkb(bb, cb, sb);
        return this.afterCall(), kb
      }
      entityInfoBatch(bb) {
        const cb = this.core.cWb(bb);
        return this.afterCall(), cb
      }
      entityName(bb) {
        const cb = this.core.Wab(bb);
        return this.afterCall(), cb
      }
      hasEffect(bb, cb) {
        const sb = this.core.Iab(bb, cb);
        return this.afterCall(), sb
      }
      scratchPtr() {
        const bb = this.core.wkb();
        return this.afterCall(), bb
      }
      invSwap(bb, cb) {
        const sb = this.core.Cab(bb, cb);
        return this.afterCall(), sb
      }
      invMove(bb, cb, sb) {
        const kb = this.core.mab(bb, cb, sb);
        return this.afterCall(), kb
      }
      invQuickMove(bb, cb, sb, kb) {
        const Wb = this.core.Qab(bb, cb, sb, kb);
        return this.afterCall(), Wb
      }
      invRemove(bb, cb, sb) {
        const kb = this.core.eab(bb, cb, sb);
        return this.afterCall(), kb
      }
      invEnchant(bb, cb, sb, kb, Wb) {
        const ab = this.core.Xab(bb, cb, sb, kb, Wb);
        return this.afterCall(), ab
      }
      craft(bb, cb, sb) {
        const kb = this.core.craft(bb, cb, sb);
        return this.afterCall(), kb
      }
      salvage(bb, cb, sb) {
        const kb = this.core.salvage(bb, cb, sb);
        return this.afterCall(), kb
      }
      selectSlot(bb) {
        const cb = this.core.yab(bb);
        return this.afterCall(), cb
      }
      closeChest() {
        const bb = this.core.FWb();
        return this.afterCall(), bb
      }
      itemAttributesBatch(bb) {
        const cb = this.core.bWb(bb);
        return this.afterCall(), cb
      }
      itemNames() {
        const bb = this.core.JV();
        return this.afterCall(), bb
      }
      blockProps() {
        const bb = this.core.RWb();
        return this.afterCall(), bb
      }
      itemProps() {
        const bb = this.core.Nab();
        return this.afterCall(), bb
      }
      salvageRecipe(bb) {
        const cb = this.core.kWb(bb);
        return this.afterCall(), cb
      }
      craftingView(bb, cb, sb) {
        const kb = this.core.pkb(bb, cb, sb);
        return this.afterCall(), kb
      }
      directorView() {
        const bb = this.core.okb();
        return this.afterCall(), bb
      }
      directorDefaultPose() {
        const bb = this.core.Rkb();
        return this.afterCall(), bb
      }
      directorEntity(bb) {
        const cb = this.core.vkb(bb);
        return this.afterCall(), cb
      }
      directorPose(bb, cb, sb, kb, Wb, ab) {
        const Tb = this.core.Fkb(bb, cb, sb, kb, Wb, ab);
        return this.afterCall(), Tb
      }
      passTimings(bb) {
        const cb = this.core.Yab(bb);
        return this.afterCall(), cb
      }
      drawCensus() {
        const bb = this.core.bab();
        return this.afterCall(), bb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);
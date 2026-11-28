export const id = 307;
export const ids = [307];
export const modules = {
  42253: (bb, wb, Mb) => {
    Mb.d(wb, {
      $b: () => db,
      $e: () => cM,
      Ac: () => Ow,
      Ad: () => lb,
      B: () => Hw,
      Ce: () => JM,
      Db: () => Bb,
      Dc: () => rb,
      De: () => WM,
      Df: () => BM,
      E: () => Rb,
      Ed: () => Ib,
      Gb: () => sw,
      Gc: () => Lw,
      Gd: () => Fw,
      H: () => cb,
      He: () => TM,
      Hf: () => oM,
      Ic: () => lw,
      Id: () => dw,
      J: () => Db,
      Je: () => fM,
      Kb: () => yb,
      L: () => aw,
      Lf: () => NM,
      M: () => tb,
      Mb: () => wM,
      Mc: () => Mw,
      Md: () => Qb,
      Me: () => QM,
      Nb: () => Yb,
      Oc: () => Kb,
      Od: () => Uw,
      P: () => ab,
      Pc: () => hb,
      Pd: () => yw,
      Pe: () => ZM,
      Pf: () => vM,
      Qb: () => Tb,
      Qd: () => Gw,
      Qe: () => aM,
      Qf: () => hM,
      Sc: () => eb,
      T: () => ge,
      Tc: () => jb,
      Td: () => bw,
      Te: () => qM,
      U: () => bM,
      Ub: () => ob,
      Ud: () => kb,
      Uf: () => FM,
      Vb: () => ww,
      Ve: () => GM,
      W: () => nb,
      Wc: () => Vw,
      Xe: () => Ve,
      Yc: () => Fb,
      Yd: () => qb,
      Ye: () => KM,
      Yf: () => SM,
      Zb: () => Ew,
      Zf: () => jM,
      _: () => Tw,
      ab: () => kw,
      ad: () => Eb,
      ae: () => zb,
      b: () => pb,
      be: () => Ob,
      bf: () => rM,
      bg: () => zM,
      d: () => Vb,
      db: () => Pb,
      dc: () => Zb,
      dd: () => Cb,
      de: () => LM,
      df: () => YM,
      e: () => xb,
      eg: () => PM,
      fb: () => ow,
      fc: () => pw,
      g: () => Sb,
      ge: () => He,
      gf: () => DM,
      hc: () => sb,
      hd: () => VM,
      hg: () => mM,
      ib: () => Nb,
      ic: () => mb,
      if: () => RM,
      jb: () => HM,
      jc: () => Iw,
      je: () => sM,
      jg: () => uM,
      k: () => IM,
      kb: () => pM,
      l: () => lM,
      ld: () => gM,
      mc: () => Lb,
      me: () => XM,
      mf: () => pe,
      mg: () => tM,
      nb: () => vb,
      nd: () => Xb,
      nf: () => be,
      ng: () => EM,
      o: () => gb,
      pc: () => uw,
      pe: () => iM,
      q: () => qw,
      qb: () => eM,
      qc: () => Gb,
      qf: () => Me,
      rd: () => Ab,
      rf: () => kM,
      se: () => CM,
      sf: () => we,
      t: () => iw,
      tb: () => MM,
      tc: () => ub,
      td: () => fb,
      te: () => nM,
      u: () => ib,
      uf: () => ee,
      v: () => Pw,
      vc: () => nw,
      vd: () => Jb,
      wd: () => Wb,
      wf: () => yM,
      xb: () => tw,
      xc: () => ew,
      xe: () => dM,
      y: () => Ub,
      yb: () => gw,
      yd: () => Cw,
      zb: () => Hb,
      ze: () => AM,
      zf: () => xM
    });
    const eb = -2147483648,
      Hb = 12,
      pb = 12,
      Vb = 4095,
      gb = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      lb = {
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
      Lb = {
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
      Ib = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      Ob = {
        Alive: 16
      },
      Ub = 32,
      tb = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      Cb = {
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
      Eb = 4294967295,
      Fb = 0,
      Bb = 4294967295,
      sb = 4,
      mb = 123,
      hb = -2147483648,
      zb = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      Xb = 51,
      xb = 5,
      jb = 4294967295,
      Kb = 4294967295,
      rb = 128,
      Rb = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      Db = 16,
      cb = 255,
      Yb = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      Zb = {
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
      fb = {
        Hotbar: 256,
        Drop: 257
      },
      Ab = {
        Down: 1,
        Next: 2,
        Stack: 4,
        Repeat: 8
      },
      Wb = {
        Rate: 0,
        Gyro: 1
      },
      Jb = {
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
      Sb = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      Nb = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      vb = {
        LookPointed: 1,
        Held: 2
      },
      Qb = 3,
      Gb = {
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
      qb = {
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
      ab = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      ib = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      ub = {
        Stackable: 1
      },
      db = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      Pb = {
        Detail: 1,
        RoomForOne: 2
      },
      nb = {
        HaveIngredients: 1,
        Listed: 2
      },
      yb = {
        HasOpts: 1
      },
      ob = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      Tb = {
        Up: 1,
        Down: 2
      },
      kb = {
        TwoD: 1,
        Loop: 2
      },
      bw = {
        StopAfter: 1
      },
      ww = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      Mw = {
        Pose: 1,
        Visible: 2,
        Clip: 4,
        Perch: 8
      },
      ew = 255,
      Hw = 65535,
      pw = 255,
      Vw = 65535,
      gw = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      lw = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      Lw = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      Iw = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      Ow = 4294967295,
      Uw = 4294967295,
      tw = 255,
      Cw = {
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
      Ew = {
        critical: 123
      },
      Fw = 4294967295,
      Bw = {
        BYTES: 4,
        sO: (bb, wb) => bb.getUint32(wb + 0, !0)
      },
      sw = {
        BYTES: 12,
        serverId: (bb, wb) => bb.getInt32(wb + 0, !0),
        index: (bb, wb) => bb.getUint32(wb + 4, !0),
        kind: (bb, wb) => bb.getUint16(wb + 8, !0)
      },
      mw = {
        BYTES: 20,
        pos: (bb, wb, Mb) => bb.getInt32(wb + 0 + 4 * Mb, !0),
        actual: (bb, wb) => bb.getUint32(wb + 12, !0),
        dataLen: (bb, wb) => bb.getUint32(wb + 16, !0)
      },
      hw = {
        BYTES: 20,
        what: (bb, wb) => bb.getUint8(wb + 0),
        value: (bb, wb) => bb.getInt16(wb + 2, !0),
        pos: (bb, wb, Mb) => bb.getInt32(wb + 4 + 4 * Mb, !0),
        block: (bb, wb) => bb.getUint32(wb + 16, !0)
      },
      zw = {
        BYTES: 4,
        item: (bb, wb) => bb.getUint16(wb + 0, !0),
        slot: (bb, wb) => bb.getUint8(wb + 2)
      },
      Xw = {
        BYTES: 16,
        target: (bb, wb) => bb.getInt32(wb + 0, !0),
        damage: (bb, wb) => bb.getFloat32(wb + 4, !0),
        distance: (bb, wb) => bb.getFloat32(wb + 8, !0),
        crit: (bb, wb) => bb.getUint8(wb + 12)
      },
      xw = {
        BYTES: 4,
        slot: (bb, wb) => bb.getUint16(wb + 0, !0)
      },
      jw = {
        BYTES: 20,
        what: (bb, wb) => bb.getUint8(wb + 0),
        value: (bb, wb) => bb.getInt16(wb + 2, !0),
        pos: (bb, wb, Mb) => bb.getInt32(wb + 4 + 4 * Mb, !0),
        block: (bb, wb) => bb.getUint32(wb + 16, !0)
      },
      Kw = {
        BYTES: 12,
        serverId: (bb, wb) => bb.getInt32(wb + 0, !0),
        index: (bb, wb) => bb.getUint32(wb + 4, !0),
        what: (bb, wb) => bb.getUint16(wb + 8, !0)
      },
      rw = {
        BYTES: 24,
        cx: (bb, wb) => bb.getInt32(wb + 0, !0),
        cy: (bb, wb) => bb.getInt32(wb + 4, !0),
        cz: (bb, wb) => bb.getInt32(wb + 8, !0),
        slot: (bb, wb) => bb.getUint32(wb + 12, !0),
        generation: (bb, wb) => bb.getUint32(wb + 16, !0),
        flags: (bb, wb) => bb.getUint32(wb + 20, !0)
      },
      Rw = {
        BYTES: 44,
        pos: (bb, wb, Mb) => bb.getFloat64(wb + 0 + 8 * Mb, !0),
        sound: (bb, wb) => bb.getUint16(wb + 24, !0),
        flags: (bb, wb) => bb.getUint16(wb + 26, !0),
        handle: (bb, wb) => bb.getUint32(wb + 28, !0),
        volume: (bb, wb) => bb.getFloat32(wb + 32, !0),
        rate: (bb, wb) => bb.getFloat32(wb + 36, !0),
        refDist: (bb, wb) => bb.getFloat32(wb + 40, !0)
      },
      Dw = {
        BYTES: 28,
        pos: (bb, wb, Mb) => bb.getFloat64(wb + 0 + 8 * Mb, !0),
        handle: (bb, wb) => bb.getUint32(wb + 24, !0)
      },
      Yw = {
        BYTES: 16,
        handle: (bb, wb) => bb.getUint32(wb + 0, !0),
        volume: (bb, wb) => bb.getFloat32(wb + 4, !0),
        rate: (bb, wb) => bb.getFloat32(wb + 8, !0),
        refDist: (bb, wb) => bb.getFloat32(wb + 12, !0)
      },
      Zw = {
        BYTES: 12,
        handle: (bb, wb) => bb.getUint32(wb + 0, !0),
        to: (bb, wb) => bb.getFloat32(wb + 4, !0),
        ms: (bb, wb) => bb.getUint16(wb + 8, !0),
        flags: (bb, wb) => bb.getUint16(wb + 10, !0)
      },
      fw = {
        BYTES: 4,
        handle: (bb, wb) => bb.getUint32(wb + 0, !0)
      },
      Aw = {
        BYTES: 8,
        reason: (bb, wb) => bb.getUint8(wb + 0),
        code: (bb, wb) => bb.getUint8(wb + 1),
        version: (bb, wb) => bb.getUint32(wb + 4, !0)
      },
      Ww = {
        BYTES: 4,
        key: (bb, wb) => bb.getUint8(wb + 0),
        tag: (bb, wb) => bb.getUint8(wb + 1)
      },
      Jw = {
        BYTES: 16,
        save: (bb, wb) => bb.getUint32(wb + 0, !0),
        index: (bb, wb) => bb.getUint32(wb + 4, !0),
        ptr: (bb, wb) => bb.getUint32(wb + 8, !0),
        len: (bb, wb) => bb.getUint32(wb + 12, !0)
      },
      Sw = {
        BYTES: 16,
        save: (bb, wb) => bb.getUint32(wb + 0, !0),
        kind: (bb, wb) => bb.getUint8(wb + 4),
        parts: (bb, wb) => bb.getUint32(wb + 8, !0),
        bytes: (bb, wb) => bb.getUint32(wb + 12, !0)
      },
      Nw = {
        BYTES: 4,
        totalTicks: (bb, wb) => bb.getUint32(wb + 0, !0)
      },
      vw = {
        BYTES: 24,
        what: (bb, wb) => bb.getUint8(wb + 0),
        int: (bb, wb) => bb.getInt32(wb + 4, !0),
        x: (bb, wb) => bb.getFloat64(wb + 8, !0),
        y: (bb, wb) => bb.getFloat64(wb + 16, !0)
      },
      Qw = {
        BYTES: 8,
        what: (bb, wb) => bb.getUint8(wb + 0),
        kind: (bb, wb) => bb.getUint8(wb + 1),
        save: (bb, wb) => bb.getUint32(wb + 4, !0)
      },
      Gw = {
        BYTES: 4,
        tV: (bb, wb) => bb.getUint16(wb + 0, !0)
      },
      qw = {
        BYTES: 360,
        eye: (bb, wb, Mb) => bb.getFloat64(wb + 0 + 8 * Mb, !0),
        localPos: (bb, wb, Mb) => bb.getFloat64(wb + 24 + 8 * Mb, !0),
        pMb: (bb, wb, Mb) => bb.getFloat64(wb + 48 + 8 * Mb, !0),
        viewProj: (bb, wb, Mb) => bb.getFloat32(wb + 72 + 4 * Mb, !0),
        origin: (bb, wb, Mb) => bb.getInt32(wb + 136 + 4 * Mb, !0),
        heading: (bb, wb) => bb.getFloat32(wb + 148, !0),
        pitch: (bb, wb) => bb.getFloat32(wb + 152, !0),
        tanHalfFovX: (bb, wb) => bb.getFloat32(wb + 156, !0),
        tanHalfFovY: (bb, wb) => bb.getFloat32(wb + 160, !0),
        viewportCss: (bb, wb, Mb) => bb.getFloat32(wb + 164 + 4 * Mb, !0),
        localVel: (bb, wb, Mb) => bb.getFloat32(wb + 172 + 4 * Mb, !0),
        actionDir: (bb, wb, Mb) => bb.getFloat32(wb + 184 + 4 * Mb, !0),
        localId: (bb, wb) => bb.getInt32(wb + 196, !0),
        playerFlags: (bb, wb) => bb.getUint32(wb + 200, !0),
        targetBlock: (bb, wb, Mb) => bb.getInt32(wb + 204 + 4 * Mb, !0),
        targetAdjacent: (bb, wb, Mb) => bb.getInt32(wb + 216 + 4 * Mb, !0),
        targetBlockId: (bb, wb) => bb.getUint32(wb + 228, !0),
        targetNormal: (bb, wb, Mb) => bb.getInt8(wb + 232 + 1 * Mb),
        targetFlags: (bb, wb) => bb.getUint8(wb + 235),
        pickedEntity: (bb, wb) => bb.getInt32(wb + 236, !0),
        breakingPos: (bb, wb, Mb) => bb.getInt32(wb + 240 + 4 * Mb, !0),
        breakingProgress: (bb, wb) => bb.getFloat32(wb + 252, !0),
        NK: (bb, wb) => bb.getUint16(wb + 256, !0),
        selectedSlot: (bb, wb) => bb.getUint8(wb + 258),
        heldFlags: (bb, wb) => bb.getUint8(wb + 259),
        heldAttrVersion: (bb, wb) => bb.getUint32(wb + 260, !0),
        inventoryVersion: (bb, wb) => bb.getUint32(wb + 264, !0),
        effectsVersion: (bb, wb) => bb.getUint32(wb + 268, !0),
        entitiesVersion: (bb, wb) => bb.getUint32(wb + 272, !0),
        entRenderPtr: (bb, wb) => bb.getUint32(wb + 276, !0),
        entCapacity: (bb, wb) => bb.getUint32(wb + 280, !0),
        frameMs: (bb, wb) => bb.getFloat32(wb + 284, !0),
        fps: (bb, wb) => bb.getFloat32(wb + 288, !0),
        entVisPtr: (bb, wb) => bb.getUint32(wb + 292, !0),
        momentumFrac: (bb, wb) => bb.getFloat32(wb + 296, !0),
        chunkSlotsPtr: (bb, wb) => bb.getUint32(wb + 300, !0),
        chunkSlotsLen: (bb, wb) => bb.getUint32(wb + 304, !0),
        walkThroughPtr: (bb, wb) => bb.getUint32(wb + 308, !0),
        walkThroughLen: (bb, wb) => bb.getUint32(wb + 312, !0),
        audioViewPtr: (bb, wb) => bb.getUint32(wb + 316, !0),
        inventoryViewPtr: (bb, wb) => bb.getUint32(wb + 320, !0),
        eventOverflowGen: (bb, wb) => bb.getUint32(wb + 324, !0),
        eventOverflowMask: (bb, wb) => bb.getUint32(wb + 328, !0),
        promptEntity: (bb, wb) => bb.getInt32(wb + 332, !0),
        replayViewPtr: (bb, wb) => bb.getUint32(wb + 336, !0),
        slotIcon: (bb, wb) => bb.getUint32(wb + 340, !0),
        localDeaths: (bb, wb) => bb.getUint32(wb + 344, !0),
        cameraFar: (bb, wb) => bb.getFloat32(wb + 348, !0),
        gliderBoostFuel: (bb, wb) => bb.getUint32(wb + 352, !0),
        interactLabel: (bb, wb) => bb.getUint16(wb + 356, !0),
        interactIcon: (bb, wb) => bb.getUint16(wb + 358, !0)
      },
      aw = {
        BYTES: 16,
        voxelsPtr: (bb, wb) => bb.getUint32(wb + 0, !0),
        version: (bb, wb) => bb.getUint32(wb + 4, !0),
        generation: (bb, wb) => bb.getUint32(wb + 8, !0),
        dg: (bb, wb) => bb.getUint32(wb + 12, !0)
      },
      iw = {
        BYTES: 56,
        listener: (bb, wb, Mb) => bb.getFloat64(wb + 0 + 8 * Mb, !0),
        forward: (bb, wb, Mb) => bb.getFloat32(wb + 24 + 4 * Mb, !0),
        up: (bb, wb, Mb) => bb.getFloat32(wb + 36 + 4 * Mb, !0),
        dropped: (bb, wb) => bb.getUint32(wb + 48, !0),
        unfollowed: (bb, wb) => bb.getUint32(wb + 52, !0)
      },
      uw = {
        BYTES: 8,
        item: (bb, wb) => bb.getUint16(wb + 0, !0),
        amount: (bb, wb) => bb.getUint16(wb + 2, !0),
        attrVersion: (bb, wb) => bb.getUint32(wb + 4, !0)
      },
      dw = {
        BYTES: 76,
        version: (bb, wb) => bb.getUint32(wb + 0, !0),
        state: (bb, wb) => bb.getUint8(wb + 4),
        cameraMode: (bb, wb) => bb.getUint8(wb + 5),
        sO: (bb, wb) => bb.getUint32(wb + 8, !0),
        totalTicks: (bb, wb) => bb.getUint32(wb + 12, !0),
        speed: (bb, wb) => bb.getFloat32(wb + 16, !0),
        markIn: (bb, wb) => bb.getUint32(wb + 20, !0),
        markOut: (bb, wb) => bb.getUint32(wb + 24, !0),
        editVersion: (bb, wb) => bb.getUint32(wb + 28, !0),
        drops: (bb, wb, Mb) => bb.getUint32(wb + 32 + 4 * Mb, !0)
      },
      Pw = {
        BYTES: 6,
        flags: (bb, wb) => bb.getUint8(wb + 0),
        harvestType: (bb, wb) => bb.getUint8(wb + 1),
        harvestLevel: (bb, wb) => bb.getUint8(wb + 2),
        attachedTop: (bb, wb) => bb.getUint16(wb + 4, !0)
      },
      nw = {
        BYTES: 3,
        flags: (bb, wb) => bb.getUint8(wb + 0),
        harvests: (bb, wb) => bb.getUint8(wb + 1),
        level: (bb, wb) => bb.getUint8(wb + 2)
      },
      yw = {
        BYTES: 12,
        item: (bb, wb) => bb.getUint32(wb + 0, !0),
        amount: (bb, wb) => bb.getFloat64(wb + 4, !0)
      },
      ow = {
        BYTES: 16,
        recipes: (bb, wb) => bb.getUint32(wb + 0, !0),
        ingredients: (bb, wb) => bb.getUint32(wb + 4, !0),
        craftAllTimes: (bb, wb) => bb.getUint32(wb + 8, !0),
        flags: (bb, wb) => bb.getUint32(wb + 12, !0)
      },
      Tw = {
        BYTES: 10,
        item: (bb, wb) => bb.getUint16(wb + 0, !0),
        recipe: (bb, wb) => bb.getUint16(wb + 2, !0),
        produces: (bb, wb) => bb.getUint16(wb + 4, !0),
        requires: (bb, wb) => bb.getUint16(wb + 6, !0),
        flags: (bb, wb) => bb.getUint8(wb + 8)
      },
      kw = {
        BYTES: 4,
        amount: (bb, wb) => bb.getUint16(wb + 0, !0),
        items: (bb, wb) => bb.getUint16(wb + 2, !0)
      },
      bM = {
        BYTES: 8,
        amount: (bb, wb) => bb.getUint32(wb + 0, !0),
        item: (bb, wb) => bb.getUint16(wb + 4, !0),
        from: (bb, wb) => bb.getUint16(wb + 6, !0)
      },
      wM = {
        BYTES: 16,
        serverId: (bb, wb) => bb.getInt32(wb + 0, !0),
        len: (bb, wb) => bb.getUint32(wb + 4, !0),
        kind: (bb, wb) => bb.getUint16(wb + 8, !0),
        variation: (bb, wb) => bb.getUint16(wb + 10, !0),
        pose: (bb, wb) => bb.getUint8(wb + 12),
        meta: (bb, wb) => bb.getUint8(wb + 13),
        mesh: (bb, wb) => bb.getUint8(wb + 14),
        flags: (bb, wb) => bb.getUint8(wb + 15)
      },
      MM = {
        BYTES: 56,
        terrainOpaque: (bb, wb) => bb.getUint32(wb + 0, !0),
        terrainTransparent: (bb, wb) => bb.getUint32(wb + 4, !0),
        terrainPack: (bb, wb) => bb.getUint32(wb + 8, !0),
        earthSky: (bb, wb) => bb.getUint32(wb + 12, !0),
        skyMeshes: (bb, wb) => bb.getUint32(wb + 16, !0),
        regular: (bb, wb) => bb.getUint32(wb + 20, !0),
        thin: (bb, wb) => bb.getUint32(wb + 24, !0),
        line: (bb, wb) => bb.getUint32(wb + 28, !0),
        text: (bb, wb) => bb.getUint32(wb + 32, !0),
        particles: (bb, wb) => bb.getUint32(wb + 36, !0),
        terrainParts: (bb, wb) => bb.getUint32(wb + 40, !0),
        terrainCompiling: (bb, wb) => bb.getUint32(wb + 44, !0),
        ringCopiesMax: (bb, wb) => bb.getUint32(wb + 48, !0),
        ringBusyWrites: (bb, wb) => bb.getUint32(wb + 52, !0)
      },
      eM = {
        BYTES: 16,
        fov: (bb, wb) => bb.getFloat32(wb + 0, !0),
        baseFov: (bb, wb) => bb.getFloat32(wb + 4, !0),
        aspect: (bb, wb) => bb.getFloat32(wb + 8, !0),
        bodyHeading: (bb, wb) => bb.getFloat32(wb + 12, !0)
      },
      HM = {
        BYTES: 32,
        eye: (bb, wb, Mb) => bb.getFloat64(wb + 0 + 8 * Mb, !0),
        heading: (bb, wb) => bb.getFloat32(wb + 24, !0),
        pitch: (bb, wb) => bb.getFloat32(wb + 28, !0)
      },
      pM = {
        BYTES: 48,
        feet: (bb, wb, Mb) => bb.getFloat64(wb + 0 + 8 * Mb, !0),
        eyeHeight: (bb, wb) => bb.getFloat32(wb + 24, !0),
        heading: (bb, wb) => bb.getFloat32(wb + 28, !0),
        headingIsDrawn: (bb, wb) => bb.getUint32(wb + 32, !0),
        pitch: (bb, wb) => bb.getFloat32(wb + 36, !0),
        lookHeading: (bb, wb) => bb.getFloat32(wb + 40, !0)
      },
      VM = 32,
      gM = 63,
      lM = {
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

    function LM(bb, wb, Mb, eb, Hb) {
      var pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb, Kb, rb, Rb, Db, cb;
      switch (bb) {
        case 32:
          return 4 === eb && (null === (pb = Hb.tickEnd) || void 0 === pb || pb.call(Hb, Bw.sO(wb, Mb)), !0);
        case 33:
          return 12 === eb && (null === (Vb = Hb.entitySpawned) || void 0 === Vb || Vb.call(Hb, sw.serverId(wb, Mb), sw.index(wb, Mb), sw.kind(wb, Mb)), !0);
        case 34:
          return 12 === eb && (null === (gb = Hb.entityDespawned) || void 0 === gb || gb.call(Hb, sw.serverId(wb, Mb), sw.index(wb, Mb), sw.kind(wb, Mb)), !0);
        case 39:
          return !(eb < 20) && (null === (lb = Hb.changeBlockFail) || void 0 === lb || lb.call(Hb, mw.pos(wb, Mb, 0), mw.pos(wb, Mb, 1), mw.pos(wb, Mb, 2), mw.actual(wb, Mb), mw.dataLen(wb, Mb), Mb + 20, eb - 20), !0);
        case 46:
          return 0 === eb && (null === (Lb = Hb.changeBlockFailEnd) || void 0 === Lb || Lb.call(Hb), !0);
        case 48:
          return 20 === eb && (null === (Ib = Hb.inventoryEvent) || void 0 === Ib || Ib.call(Hb, hw.what(wb, Mb), hw.value(wb, Mb), hw.pos(wb, Mb, 0), hw.pos(wb, Mb, 1), hw.pos(wb, Mb, 2), hw.block(wb, Mb)), !0);
        case 49:
          return 4 === eb && (null === (Ob = Hb.heldItemChanged) || void 0 === Ob || Ob.call(Hb, zw.item(wb, Mb), zw.slot(wb, Mb)), !0);
        case 50:
          return 16 === eb && (null === (Ub = Hb.shotDamage) || void 0 === Ub || Ub.call(Hb, Xw.target(wb, Mb), Xw.damage(wb, Mb), Xw.distance(wb, Mb), Xw.crit(wb, Mb)), !0);
        case 51:
          return !(eb < 4) && (null === (tb = Hb.enchantOffer) || void 0 === tb || tb.call(Hb, xw.slot(wb, Mb), Mb + 4, eb - 4), !0);
        case 52:
          return !(eb < 20) && (null === (Cb = Hb.uiEvent) || void 0 === Cb || Cb.call(Hb, jw.what(wb, Mb), jw.value(wb, Mb), jw.pos(wb, Mb, 0), jw.pos(wb, Mb, 1), jw.pos(wb, Mb, 2), jw.block(wb, Mb), Mb + 20, eb - 20), !0);
        case 53:
          return 12 === eb && (null === (Eb = Hb.entityInfoChanged) || void 0 === Eb || Eb.call(Hb, Kw.serverId(wb, Mb), Kw.index(wb, Mb), Kw.what(wb, Mb)), !0);
        case 55:
          return 24 === eb && (null === (Fb = Hb.chunkSlot) || void 0 === Fb || Fb.call(Hb, rw.cx(wb, Mb), rw.cy(wb, Mb), rw.cz(wb, Mb), rw.slot(wb, Mb), rw.generation(wb, Mb), rw.flags(wb, Mb)), !0);
        case 40:
          return 44 === eb && (null === (Bb = Hb.playSound) || void 0 === Bb || Bb.call(Hb, Rw.pos(wb, Mb, 0), Rw.pos(wb, Mb, 1), Rw.pos(wb, Mb, 2), Rw.sound(wb, Mb), Rw.flags(wb, Mb), Rw.handle(wb, Mb), Rw.volume(wb, Mb), Rw.rate(wb, Mb), Rw.refDist(wb, Mb)), !0);
        case 41:
          return 28 === eb && (null === (sb = Hb.soundPos) || void 0 === sb || sb.call(Hb, Dw.pos(wb, Mb, 0), Dw.pos(wb, Mb, 1), Dw.pos(wb, Mb, 2), Dw.handle(wb, Mb)), !0);
        case 42:
          return 16 === eb && (null === (mb = Hb.soundSet) || void 0 === mb || mb.call(Hb, Yw.handle(wb, Mb), Yw.volume(wb, Mb), Yw.rate(wb, Mb), Yw.refDist(wb, Mb)), !0);
        case 43:
          return 12 === eb && (null === (hb = Hb.soundFade) || void 0 === hb || hb.call(Hb, Zw.handle(wb, Mb), Zw.to(wb, Mb), Zw.ms(wb, Mb), Zw.flags(wb, Mb)), !0);
        case 44:
          return 4 === eb && (null === (zb = Hb.soundStop) || void 0 === zb || zb.call(Hb, fw.handle(wb, Mb)), !0);
        case 45:
          return 0 === eb && (null === (Xb = Hb.soundReset) || void 0 === Xb || Xb.call(Hb), !0);
        case 56:
          return 8 === eb && (null === (xb = Hb.replayFailed) || void 0 === xb || xb.call(Hb, Aw.reason(wb, Mb), Aw.code(wb, Mb), Aw.version(wb, Mb)), !0);
        case 57:
          return !(eb < 4) && (null === (jb = Hb.replayOption) || void 0 === jb || jb.call(Hb, Ww.key(wb, Mb), Ww.tag(wb, Mb), Mb + 4, eb - 4), !0);
        case 58:
          return 16 === eb && (null === (Kb = Hb.replayFilePart) || void 0 === Kb || Kb.call(Hb, Jw.save(wb, Mb), Jw.index(wb, Mb), Jw.ptr(wb, Mb), Jw.len(wb, Mb)), !0);
        case 59:
          return 16 === eb && (null === (rb = Hb.replayFileReady) || void 0 === rb || rb.call(Hb, Sw.save(wb, Mb), Sw.kind(wb, Mb), Sw.parts(wb, Mb), Sw.bytes(wb, Mb)), !0);
        case 60:
          return !(eb < 4) && (null === (Rb = Hb.replayOpened) || void 0 === Rb || Rb.call(Hb, Nw.totalTicks(wb, Mb), Mb + 4, eb - 4), !0);
        case 61:
          return !(eb < 24) && (null === (Db = Hb.replayUiEvent) || void 0 === Db || Db.call(Hb, vw.what(wb, Mb), vw.int(wb, Mb), vw.x(wb, Mb), vw.y(wb, Mb), Mb + 24, eb - 24), !0);
        case 62:
          return 8 === eb && (null === (cb = Hb.recorderEvent) || void 0 === cb || cb.call(Hb, Qw.what(wb, Mb), Qw.kind(wb, Mb), Qw.save(wb, Mb)), !0);
        default:
          return !1
      }
    }
    const IM = {
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
      CosmeticModel: 399,
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
    let OM = new Uint8Array(0);

    function UM(bb) {
      return OM.buffer !== bb.buffer && (OM = new Uint8Array(bb.buffer)), OM
    }

    function tM(bb, wb, Mb) {
      const eb = bb.LO(66, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint8(eb + 0, Mb), !0
    }

    function CM(bb, wb, Mb) {
      const eb = bb.LO(67, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint32(eb + 0, Mb, !0), !0
    }

    function EM(bb, wb, Mb) {
      const eb = bb.LO(68, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint8(eb + 0, Mb), !0
    }

    function FM(bb, wb, Mb, eb) {
      const Hb = bb.LO(69, wb, 4 + eb.length);
      if (Hb < 0) return !1;
      const pb = bb.view;
      return pb.setUint8(Hb + 0, Mb), UM(pb).set(eb, pb.byteOffset + Hb + 4), !0
    }

    function BM(bb, wb, Mb, eb, Hb) {
      const pb = bb.LO(128, wb, 4 + Hb.length);
      if (pb < 0) return !1;
      const Vb = bb.view;
      return Vb.setUint8(pb + 0, Mb), Vb.setUint16(pb + 2, eb, !0), UM(Vb).set(Hb, Vb.byteOffset + pb + 4), !0
    }

    function sM(bb, wb, Mb) {
      const eb = bb.LO(131, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setInt32(eb + 0, Mb, !0), !0
    }

    function mM(bb, wb, Mb) {
      const eb = bb.LO(132, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint32(eb + 0, Mb, !0), !0
    }

    function hM(bb, wb, Mb) {
      const eb = bb.LO(133, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint32(eb + 0, Mb, !0), !0
    }

    function zM(bb, wb, Mb) {
      const eb = bb.LO(144, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint8(eb + 0, Mb), !0
    }

    function XM(bb, wb, Mb, eb, Hb) {
      const pb = bb.LO(145, wb, 12);
      if (pb < 0) return !1;
      const Vb = bb.view;
      return Vb.setInt32(pb + 0, Mb, !0), Vb.setInt32(pb + 4, eb, !0), Vb.setInt32(pb + 8, Hb, !0), !0
    }

    function xM(bb, wb, Mb, eb) {
      const Hb = bb.LO(256, wb, 4 + eb.length);
      if (Hb < 0) return !1;
      const pb = bb.view;
      return pb.setUint16(Hb + 0, Mb, !0), UM(pb).set(eb, pb.byteOffset + Hb + 4), !0
    }

    function jM(bb, wb, Mb) {
      const eb = bb.LO(258, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint8(eb + 0, Mb), !0
    }

    function KM(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
      const Lb = bb.LO(320, wb, 48 + lb.length);
      if (Lb < 0) return !1;
      const Ib = bb.view;
      Ib.setUint32(Lb + 0, Mb, !0), Ib.setUint16(Lb + 4, eb, !0), Ib.setUint16(Lb + 6, Hb, !0), Ib.setUint32(Lb + 8, pb, !0);
      for (let Ob = 0; Ob < 3; Ob++) Ib.setFloat64(Lb + 12 + 8 * Ob, Vb[Ob], !0);
      for (let Ob = 0; Ob < 3; Ob++) Ib.setFloat32(Lb + 36 + 4 * Ob, gb[Ob], !0);
      return UM(Ib).set(lb, Ib.byteOffset + Lb + 48), !0
    }

    function rM(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
      const Lb = bb.LO(321, wb, 48 + lb.length);
      if (Lb < 0) return !1;
      const Ib = bb.view;
      Ib.setUint32(Lb + 0, Mb, !0), Ib.setInt32(Lb + 4, eb, !0), Ib.setUint16(Lb + 8, Hb, !0), Ib.setUint16(Lb + 10, pb, !0);
      for (let Ob = 0; Ob < 3; Ob++) Ib.setFloat64(Lb + 12 + 8 * Ob, Vb[Ob], !0);
      for (let Ob = 0; Ob < 3; Ob++) Ib.setFloat32(Lb + 36 + 4 * Ob, gb[Ob], !0);
      return UM(Ib).set(lb, Ib.byteOffset + Lb + 48), !0
    }

    function RM(bb, wb, Mb, eb, Hb, pb, Vb) {
      const gb = bb.LO(322, wb, 44 + Vb.length);
      if (gb < 0) return !1;
      const lb = bb.view;
      lb.setUint32(gb + 0, Mb, !0), lb.setUint32(gb + 4, eb, !0);
      for (let Lb = 0; Lb < 3; Lb++) lb.setFloat64(gb + 8 + 8 * Lb, Hb[Lb], !0);
      for (let Lb = 0; Lb < 3; Lb++) lb.setFloat32(gb + 32 + 4 * Lb, pb[Lb], !0);
      return UM(lb).set(Vb, lb.byteOffset + gb + 44), !0
    }

    function DM(bb, wb, Mb) {
      const eb = bb.LO(323, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint32(eb + 0, Mb, !0), !0
    }

    function cM(bb, wb, Mb, eb, Hb, pb) {
      const Vb = bb.LO(324, wb, 32 + pb.length);
      if (Vb < 0) return !1;
      const gb = bb.view;
      gb.setUint32(Vb + 0, Mb, !0), gb.setUint32(Vb + 4, eb, !0);
      for (let lb = 0; lb < 3; lb++) gb.setFloat64(Vb + 8 + 8 * lb, Hb[lb], !0);
      return UM(gb).set(pb, gb.byteOffset + Vb + 32), !0
    }

    function YM(bb, wb) {
      return !(bb.LO(325, wb, 0) < 0)
    }

    function ZM(bb, wb, Mb, eb, Hb, pb) {
      const Vb = bb.LO(384, wb, 16);
      if (Vb < 0) return !1;
      const gb = bb.view;
      return gb.setUint32(Vb + 0, Mb, !0), gb.setUint32(Vb + 4, eb, !0), gb.setFloat32(Vb + 8, Hb, !0), gb.setFloat32(Vb + 12, pb, !0), !0
    }

    function fM(bb, wb, Mb, eb, Hb, pb, Vb) {
      const gb = bb.LO(385, wb, 36 + Vb.length);
      if (gb < 0) return !1;
      const lb = bb.view;
      lb.setUint32(gb + 0, Mb, !0), lb.setUint32(gb + 4, eb, !0);
      for (let Lb = 0; Lb < 3; Lb++) lb.setFloat64(gb + 8 + 8 * Lb, Hb[Lb], !0);
      return lb.setUint32(gb + 32, pb, !0), UM(lb).set(Vb, lb.byteOffset + gb + 36), !0
    }

    function AM(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
      const Lb = bb.LO(386, wb, 56 + lb.length);
      if (Lb < 0) return !1;
      const Ib = bb.view;
      Ib.setUint32(Lb + 0, Mb, !0), Ib.setUint8(Lb + 4, eb);
      for (let Ob = 0; Ob < 4; Ob++) Ib.setFloat32(Lb + 8 + 4 * Ob, Hb[Ob], !0);
      for (let Ob = 0; Ob < 3; Ob++) Ib.setFloat64(Lb + 24 + 8 * Ob, pb[Ob], !0);
      return Ib.setUint32(Lb + 48, Vb, !0), Ib.setUint32(Lb + 52, gb, !0), UM(Ib).set(lb, Ib.byteOffset + Lb + 56), !0
    }

    function WM(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
      const Lb = bb.LO(387, wb, 56);
      if (Lb < 0) return !1;
      const Ib = bb.view;
      Ib.setUint32(Lb + 0, Mb, !0), Ib.setUint16(Lb + 4, eb, !0), Ib.setUint8(Lb + 6, Hb);
      for (let Ob = 0; Ob < 3; Ob++) Ib.setFloat64(Lb + 8 + 8 * Ob, pb[Ob], !0);
      for (let Ob = 0; Ob < 2; Ob++) Ib.setFloat32(Lb + 32 + 4 * Ob, Vb[Ob], !0);
      Ib.setFloat32(Lb + 40, gb, !0);
      for (let Ob = 0; Ob < 3; Ob++) Ib.setFloat32(Lb + 44 + 4 * Ob, lb[Ob], !0);
      return !0
    }

    function JM(bb, wb, Mb) {
      const eb = bb.LO(388, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint32(eb + 0, Mb, !0), !0
    }

    function SM(bb, wb, Mb, eb) {
      const Hb = bb.LO(389, wb, 8);
      if (Hb < 0) return !1;
      const pb = bb.view;
      return pb.setInt32(Hb + 0, Mb, !0), pb.setFloat32(Hb + 4, eb, !0), !0
    }

    function NM(bb, wb, Mb, eb) {
      const Hb = bb.LO(390, wb, 8);
      if (Hb < 0) return !1;
      const pb = bb.view;
      return pb.setInt32(Hb + 0, Mb, !0), pb.setFloat32(Hb + 4, eb, !0), !0
    }

    function vM(bb, wb, Mb, eb, Hb, pb) {
      const Vb = bb.LO(391, wb, 12);
      if (Vb < 0) return !1;
      const gb = bb.view;
      return gb.setFloat32(Vb + 0, Mb, !0), gb.setFloat32(Vb + 4, eb, !0), gb.setUint8(Vb + 8, Hb), gb.setUint8(Vb + 9, pb), !0
    }

    function QM(bb, wb, Mb) {
      const eb = bb.LO(392, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint32(eb + 0, Mb, !0), !0
    }

    function GM(bb, wb, Mb, eb, Hb) {
      const pb = bb.LO(393, wb, 12);
      if (pb < 0) return !1;
      const Vb = bb.view;
      return Vb.setUint32(pb + 0, Mb, !0), Vb.setUint16(pb + 4, eb, !0), Vb.setFloat32(pb + 8, Hb, !0), !0
    }

    function qM(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob) {
      const Ub = bb.LO(394, wb, 56 + Ob.length);
      if (Ub < 0) return !1;
      const tb = bb.view;
      tb.setUint32(Ub + 0, Mb, !0), tb.setUint16(Ub + 4, eb, !0), tb.setUint8(Ub + 6, Hb), tb.setUint8(Ub + 7, pb);
      for (let Cb = 0; Cb < 3; Cb++) tb.setFloat64(Ub + 8 + 8 * Cb, Vb[Cb], !0);
      tb.setFloat32(Ub + 32, gb, !0), tb.setInt32(Ub + 36, lb, !0);
      for (let Cb = 0; Cb < 3; Cb++) tb.setFloat32(Ub + 40 + 4 * Cb, Lb[Cb], !0);
      return tb.setFloat32(Ub + 52, Ib, !0), UM(tb).set(Ob, tb.byteOffset + Ub + 56), !0
    }

    function aM(bb, wb, Mb) {
      const eb = bb.LO(398, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setUint32(eb + 0, Mb, !0), !0
    }

    function iM(bb, wb, Mb, eb, Hb) {
      const pb = bb.LO(399, wb, 12);
      if (pb < 0) return !1;
      const Vb = bb.view;
      return Vb.setUint32(pb + 0, Mb, !0), Vb.setUint32(pb + 4, eb, !0), Vb.setFloat32(pb + 8, Hb, !0), !0
    }

    function uM(bb, wb, Mb) {
      const eb = bb.LO(448, wb, 4);
      if (eb < 0) return !1;
      return bb.view.setFloat32(eb + 0, Mb, !0), !0
    }

    function dM(bb, wb, Mb, eb) {
      const Hb = bb.LO(450, wb, 12);
      if (Hb < 0) return !1;
      const pb = bb.view;
      for (let Vb = 0; Vb < 2; Vb++) pb.setFloat32(Hb + 0 + 4 * Vb, Mb[Vb], !0);
      return pb.setUint8(Hb + 8, eb), !0
    }

    function PM(bb, wb, Mb, eb) {
      const Hb = bb.LO(452, wb, 8);
      if (Hb < 0) return !1;
      const pb = bb.view;
      return pb.setFloat32(Hb + 0, Mb, !0), pb.setUint8(Hb + 4, eb), !0
    }

    function nM(bb, wb, Mb, eb, Hb) {
      const pb = bb.LO(454, wb, 4);
      if (pb < 0) return !1;
      const Vb = bb.view;
      return Vb.setUint8(pb + 0, Mb), Vb.setUint8(pb + 1, eb), Vb.setUint8(pb + 2, Hb), !0
    }

    function yM(bb, wb, Mb, eb) {
      const Hb = bb.LO(455, wb, 40);
      if (Hb < 0) return !1;
      const pb = bb.view;
      for (let Vb = 0; Vb < 9; Vb++) pb.setInt32(Hb + 0 + 4 * Vb, Mb[Vb], !0);
      return pb.setUint32(Hb + 36, eb, !0), !0
    }

    function oM(bb, wb, Mb, eb) {
      const Hb = bb.LO(456, wb, 8);
      if (Hb < 0) return !1;
      const pb = bb.view;
      return pb.setFloat32(Hb + 0, Mb, !0), pb.setUint8(Hb + 4, eb), !0
    }

    function TM(bb, wb, Mb, eb, Hb) {
      const pb = bb.LO(457, wb, 16);
      if (pb < 0) return !1;
      const Vb = bb.view;
      for (let gb = 0; gb < 3; gb++) Vb.setInt32(pb + 0 + 4 * gb, Mb[gb], !0);
      for (let gb = 0; gb < 3; gb++) Vb.setInt8(pb + 12 + 1 * gb, eb[gb]);
      return Vb.setUint8(pb + 15, Hb), !0
    }

    function kM(bb, wb, Mb, eb) {
      const Hb = bb.LO(530, wb, 4 + eb.length);
      if (Hb < 0) return !1;
      const pb = bb.view;
      return pb.setUint8(Hb + 0, Mb), UM(pb).set(eb, pb.byteOffset + Hb + 4), !0
    }

    function be(bb, wb, Mb, eb, Hb, pb) {
      const Vb = bb.LO(531, wb, 12 + pb.length);
      if (Vb < 0) return !1;
      const gb = bb.view;
      return gb.setFloat32(Vb + 0, Mb, !0), gb.setFloat32(Vb + 4, eb, !0), gb.setUint32(Vb + 8, Hb, !0), UM(gb).set(pb, gb.byteOffset + Vb + 12), !0
    }

    function we(bb, wb, Mb, eb, Hb, pb) {
      const Vb = bb.LO(532, wb, 12 + pb.length);
      if (Vb < 0) return !1;
      const gb = bb.view;
      return gb.setInt32(Vb + 0, Mb, !0), gb.setInt32(Vb + 4, eb, !0), gb.setUint32(Vb + 8, Hb, !0), UM(gb).set(pb, gb.byteOffset + Vb + 12), !0
    }

    function Me(bb, wb, Mb, eb, Hb) {
      const pb = bb.LO(533, wb, 8 + Hb.length);
      if (pb < 0) return !1;
      const Vb = bb.view;
      return Vb.setInt32(pb + 0, Mb, !0), Vb.setInt32(pb + 4, eb, !0), UM(Vb).set(Hb, Vb.byteOffset + pb + 8), !0
    }

    function ee(bb, wb) {
      return !(bb.LO(576, wb, 0) < 0)
    }

    function He(bb, wb, Mb, eb, Hb, pb) {
      const Vb = bb.LO(577, wb, 36 + pb.length);
      if (Vb < 0) return !1;
      const gb = bb.view;
      gb.setUint8(Vb + 0, Mb);
      for (let lb = 0; lb < 16; lb++) gb.setUint8(Vb + 4 + 1 * lb, eb[lb]);
      for (let lb = 0; lb < 16; lb++) gb.setUint8(Vb + 20 + 1 * lb, Hb[lb]);
      return UM(gb).set(pb, gb.byteOffset + Vb + 36), !0
    }

    function pe(bb, wb, Mb, eb) {
      const Hb = bb.LO(578, wb, 4 + eb.length);
      if (Hb < 0) return !1;
      const pb = bb.view;
      return pb.setUint8(Hb + 0, Mb), UM(pb).set(eb, pb.byteOffset + Hb + 4), !0
    }

    function Ve(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
      const lb = bb.LO(579, wb, 36);
      if (lb < 0) return !1;
      const Lb = bb.view;
      return Lb.setFloat64(lb + 0, Mb, !0), Lb.setFloat64(lb + 8, eb, !0), Lb.setFloat64(lb + 16, Hb, !0), Lb.setFloat64(lb + 24, pb, !0), Lb.setUint16(lb + 32, Vb, !0), Lb.setUint8(lb + 34, gb), !0
    }
    class ge {
      constructor(bb, wb) {
        this.core = bb, this.afterCall = wb
      }
      canModify(bb, wb, Mb) {
        const eb = this.core.tgb(bb, wb, Mb);
        return this.afterCall(), eb
      }
      terrainBlocked(bb, wb, Mb, eb, Hb) {
        const pb = this.core.Llb(bb, wb, Mb, eb, Hb);
        return this.afterCall(), pb
      }
      jW(bb, wb, Mb, eb) {
        const Hb = this.core.Ut(bb, wb, Mb, eb);
        return this.afterCall(), Hb
      }
      blockData(bb, wb, Mb) {
        const eb = this.core.Ogb(bb, wb, Mb);
        return this.afterCall(), eb
      }
      cameraSweep(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = this.core.tVb(bb, wb, Mb, eb, Hb, pb, Vb);
        return this.afterCall(), gb
      }
      hasServerTarget(bb) {
        const wb = this.core.Dgb(bb);
        return this.afterCall(), wb
      }
      entityInteractable(bb) {
        const wb = this.core.hgb(bb);
        return this.afterCall(), wb
      }
      entityCrouching(bb) {
        const wb = this.core.mgb(bb);
        return this.afterCall(), wb
      }
      entityDrawn(bb) {
        const wb = this.core.mVb(bb);
        return this.afterCall(), wb
      }
      predictServerPosition(bb, wb, Mb, eb) {
        const Hb = this.core.Qgb(bb, wb, Mb, eb);
        return this.afterCall(), Hb
      }
      setOtherEntitySetting(bb, wb, Mb) {
        const eb = this.core.sVb(bb, wb, Mb);
        return this.afterCall(), eb
      }
      entityInfoBatch(bb) {
        const wb = this.core.XVb(bb);
        return this.afterCall(), wb
      }
      entityName(bb) {
        const wb = this.core.zgb(bb);
        return this.afterCall(), wb
      }
      hasEffect(bb, wb) {
        const Mb = this.core.Kgb(bb, wb);
        return this.afterCall(), Mb
      }
      scratchPtr() {
        const bb = this.core.LVb();
        return this.afterCall(), bb
      }
      invSwap(bb, wb) {
        const Mb = this.core.Wgb(bb, wb);
        return this.afterCall(), Mb
      }
      invMove(bb, wb, Mb) {
        const eb = this.core.Zgb(bb, wb, Mb);
        return this.afterCall(), eb
      }
      invQuickMove(bb, wb, Mb, eb) {
        const Hb = this.core.fgb(bb, wb, Mb, eb);
        return this.afterCall(), Hb
      }
      invRemove(bb, wb, Mb) {
        const eb = this.core.Agb(bb, wb, Mb);
        return this.afterCall(), eb
      }
      invEnchant(bb, wb, Mb, eb, Hb) {
        const pb = this.core.Ygb(bb, wb, Mb, eb, Hb);
        return this.afterCall(), pb
      }
      craft(bb, wb, Mb) {
        const eb = this.core.craft(bb, wb, Mb);
        return this.afterCall(), eb
      }
      salvage(bb, wb, Mb) {
        const eb = this.core.salvage(bb, wb, Mb);
        return this.afterCall(), eb
      }
      selectSlot(bb) {
        const wb = this.core.ugb(bb);
        return this.afterCall(), wb
      }
      closeChest() {
        const bb = this.core.Cgb();
        return this.afterCall(), bb
      }
      itemAttributesBatch(bb) {
        const wb = this.core.zVb(bb);
        return this.afterCall(), wb
      }
      itemNames() {
        const bb = this.core.xZ();
        return this.afterCall(), bb
      }
      blockProps() {
        const bb = this.core.Ugb();
        return this.afterCall(), bb
      }
      itemProps() {
        const bb = this.core.Jgb();
        return this.afterCall(), bb
      }
      salvageRecipe(bb) {
        const wb = this.core.jVb(bb);
        return this.afterCall(), wb
      }
      craftingView(bb, wb, Mb) {
        const eb = this.core.hVb(bb, wb, Mb);
        return this.afterCall(), eb
      }
      directorView() {
        const bb = this.core.OVb();
        return this.afterCall(), bb
      }
      directorDefaultPose() {
        const bb = this.core.CVb();
        return this.afterCall(), bb
      }
      directorEntity(bb) {
        const wb = this.core.UVb(bb);
        return this.afterCall(), wb
      }
      directorPose(bb, wb, Mb, eb, Hb, pb) {
        const Vb = this.core.FVb(bb, wb, Mb, eb, Hb, pb);
        return this.afterCall(), Vb
      }
      passTimings(bb) {
        const wb = this.core.vgb(bb);
        return this.afterCall(), wb
      }
      drawCensus() {
        const bb = this.core.sgb();
        return this.afterCall(), bb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);